import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Login = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        className="h-full w-full object-cover opacity-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
      />
      <Logo />
      <div className="absolute z-10 left-1/2 top-1/2 w-[25rem] -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-white flex flex-col gap-3 bg-opacity-80 ">
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>
        <input
          type="email"
          placeholder="Enter Email"
          className="p-3 rounded-md bg-slate-700 bg-opacity-40 placeholder:text-slate-100 outline-none"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md bg-slate-700 bg-opacity-40 placeholder:text-slate-100 outline-none"
        />
        <button
          type="submit"
          className="p-3 rounded-md bg-red-600 font-semibold hover:bg-opacity-70 transition-all"
        >
          Sign In
        </button>
        <h1 className="text-center ont-semibold text-[#cacaca]">or</h1>
        <button className="p-3 rounded-md bg-gray-600 bg-opacity-50 font-semibold hover:bg-opacity-70 transition-all">
          Use a sign-in code
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
      </div>
    </div>
  );
};

export default Login;
