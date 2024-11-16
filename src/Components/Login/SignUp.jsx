import React, { useRef, useState } from "react";
import Logo from "./Logo";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";
import { checkValidSignUpData } from "../../utils/validate";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogle, IoEye, IoEyeOff } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleUserPasswordButton = () => {
    const message = checkValidSignUpData(
      fullname.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullname.current.value,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleFacebookButtton = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  const handleGoogleButtton = () => {
    const provider = new GoogleAuthProvider();
    auth.languageCode = "it";
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleTwitterButton = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="h-screen w-full relative">
      {/* background image */}
      <img
        className="h-full w-full object-cover opacity-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
      />

      <Logo />

      {/* sign up form */}
      <div className="absolute z-10 left-1/2 top-1/2 w-[25rem] -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-white flex flex-col gap-3 bg-opacity-80 ">
        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>

        <input
          ref={fullname}
          type="text"
          className="p-3 outline-none rounded-md bg-gray-400 bg-opacity-50"
          placeholder="Enter your Name"
        />

        <input
          type="email"
          ref={email}
          className="p-3 outline-none rounded-md bg-gray-400 bg-opacity-50"
          placeholder="Email Address"
        />

        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            ref={password}
            className="w-full p-3 outline-none rounded-md bg-gray-400 bg-opacity-50"
            placeholder="Enter Password"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 " onClick={togglePasswordVisibility}>{showPassword ? <IoEyeOff /> : <IoEye />}</button>{" "}
        </div>

        <h2 className="text-red-500 font-bold text-lg py-2">{errorMessage}</h2>

        <button
          onClick={handleUserPasswordButton}
          className="p-3 rounded-md bg-red-600 font-semibold hover:bg-opacity-70 transition-all"
        >
          Sign Up
        </button>

        <p className="font-bold text-center text-[#dadada]">or</p>

        <div className="w-full flex justify-between items-center">
          <button
            onClick={handleFacebookButtton}
            className="p-2 w-[30%] bg-white bg-opacity-80 flex items-center justify-center rounded-xl"
          >
            <FaFacebook className="text-3xl text-black" />
          </button>
          <button
            onClick={handleGoogleButtton}
            className="p-2 w-[30%] bg-white bg-opacity-80 flex items-center justify-center rounded-xl"
          >
            <IoLogoGoogle className="text-3xl text-black" />
          </button>
          <button
            onClick={handleTwitterButton}
            className="p-2 w-[30%] bg-white bg-opacity-80 flex items-center justify-center rounded-xl"
          >
            <FaXTwitter className="text-3xl text-black" />
          </button>
        </div>

        <h2 className="text-[#cacaca] font-semibold text-sm mt-3">
          Already Registered?{" "}
          <Link to="/login">
            <span className="cursor-pointer hover:underline">Login Now</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
