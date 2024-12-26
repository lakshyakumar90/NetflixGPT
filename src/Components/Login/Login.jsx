import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { checkValidLoginData } from "../../utils/validate";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogle, IoEye, IoEyeOff } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BG_IMG } from "../../utils/constants";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const email = useRef(null);
  const password = useRef(null);

  // login button
  const handleLoginButtton = () => {
    //vaildate the form data
    const message = checkValidLoginData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //sign in logic

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  // sign in with facebook
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

  // sign in with google
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

  // sign in with twitter
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
      
      {/* header div */}
      <div className="absolute top-0 w-full bg-gradient-to-b from-black to-transparent bg-opacity-5 z-10">
        <Header />
      </div>

      {/* background image */}
      <img
        className="h-full w-full object-cover opacity-50"
        src={BG_IMG}
      />

      {/* sign in form */}
      <div className="absolute z-10 left-1/2 top-1/2 w-[25rem] -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-white flex flex-col gap-3 bg-opacity-80 ">
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>

        <input
          ref={email}
          text="email"
          className="p-3 outline-none rounded-md bg-gray-400 bg-opacity-50"
          placeholder="Email Address"
        />

        <div className="w-full relative">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            className="w-full p-3 outline-none rounded-md bg-gray-400 bg-opacity-50"
            placeholder="Email Password"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 "
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>{" "}
        </div>

        <h2 className="text-red-500 font-bold text-lg py-2">{errorMessage}</h2>

        <button
          onClick={handleLoginButtton}
          className="p-3 rounded-md bg-red-600 font-semibold hover:bg-opacity-70 transition-all"
        >
          Sign In
        </button>

        <h2 className="text-center text-[#cacaca] font-semibold cursor-pointer hover:underline">
          or
        </h2>

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
          New to Netflix?{" "}
          <Link to="/signup" className="cursor-pointer hover:underline">
            Sign up now.
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Login;
