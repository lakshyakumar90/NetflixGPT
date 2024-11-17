import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  return (
    <div>
      <button
        onClick={handleSignOut}
        className="px-4 py-[0.4rem] text-gray-700  bg-slate-200 font-bold text-sm rounded-full hover:bg-slate-300"
      >
        Sign Out
      </button>
      <h1 className="text-white">{user && user.displayName}</h1>
    </div>
  );
};

export default Browse;
