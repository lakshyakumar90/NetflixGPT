import React from "react";
import { Link } from "react-router-dom";
import Login from "../../Login/Login";

const GetStartedButton = () => {
  return (
    <Link to="/login">
      <button className="px-4 py-3 bg-red-600 rounded-full text-white font-semibold">
        Get Started
      </button>
    </Link>
  );
};

export default GetStartedButton;
