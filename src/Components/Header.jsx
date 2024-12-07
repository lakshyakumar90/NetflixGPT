import React, { useEffect } from "react";
import LanguageButton from "./Before Logged In/Body/LanguageButton";
import SignInButton from "./Before Logged In/Body/SignInButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBrowse = location.pathname.includes("/browse");
  const isLoginOrSignUp =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        if (location.pathname === "/browse") navigate("/login");
        if (location.pathname === "/login") navigate("/login");
        if (location.pathname === "/signup") navigate("/signup");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const renderLogo = () => (
    <Link to="/">
      <div>
        {LOGO}
      </div>
    </Link>
  );

  return (
    <div className="px-8 py-6 z-10 bg-black flex items-center w-full justify-between absolute ">
      {renderLogo()}
      {isLoginOrSignUp ? null : isBrowse ? (
        <div>
          <button
          onClick={handleSignOut}
          className="px-4 py-[0.4rem] text-gray-700 bg-slate-200 font-bold text-sm rounded-full hover:bg-slate-300"
        >
          Sign Out
        </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LanguageButton />
          <SignInButton />
        </div>
      )}
    </div>
  );
};

export default Header;
