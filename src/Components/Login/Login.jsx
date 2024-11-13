import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { checkValidData } from "../../utils/validate";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const[errorMessage, setErrorMessage] = useState(null);

  const handleLoginButtton = () => {
    //vaildate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div className="h-screen w-full relative">
      {/* background image */}
      <img
        className="h-full w-full object-cover opacity-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
      />

      {/* logo */}
      <Logo />

      {/* sign in form */}
      <form onSubmit={(e) => e.preventDefault()} className="absolute z-10 left-1/2 top-1/2 w-[25rem] -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-white flex flex-col gap-3 bg-opacity-80 ">
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-3 rounded-md bg-slate-700 bg-opacity-40 placeholder:text-slate-100 outline-none"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 rounded-md bg-slate-700 bg-opacity-40 placeholder:text-slate-100 outline-none"
        />

        <p className="text-red-600 font-bold">{errorMessage}</p>

        <button
          onClick={handleLoginButtton}
          className="p-3 rounded-md bg-red-600 font-semibold hover:bg-opacity-70 transition-all"
        >
          Sign In
        </button>

        <h2 className="text-center text-[#cacaca] font-semibold cursor-pointer hover:underline">
          Forgot Password?
        </h2>

        <h2 className="text-[#cacaca] font-semibold text-sm mt-3">
          New to Netflix?
          <Link to="/signup" className="cursor-pointer hover:underline">
            Sign up now.
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
