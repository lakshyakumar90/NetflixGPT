import React, { useEffect, useState } from "react";
import LanguageButton from "./Before Logged In/Body/LanguageButton";
import SignInButton from "./Before Logged In/Body/SignInButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const [showSignOut, setShowSignOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isBrowse = location.pathname.includes("/browse");
  const isLoginOrSignUp =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  const isGptSearch = location.pathname.includes("/gptsearch");
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
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const renderLogo = () => (
    <Link to="/">
      <div>{LOGO}</div>
    </Link>
  );

  // Removed the early return that was preventing header from rendering
  // if(!user) return null;

  return (
    <div className="px-8 py-6 z-10 bg-black flex items-center w-full justify-between absolute ">
      {renderLogo()}
      {isLoginOrSignUp ? null : isBrowse ? (
        <div className="flex items-center gap-4">
          <Link
            to="/browse/gptsearch"
            className="px-4 py-[0.4rem] mr-2 text-gray-700 bg-slate-200 font-bold text-sm rounded-full hover:bg-slate-300"
          >
            GPT Search
          </Link>
          {user && (
            <div className="relative">
              <div
                onClick={() => setShowSignOut(!showSignOut)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer flex items-center justify-center text-zinc-900 font-bold text-lg"
              >
                {user?.displayName ? user.displayName.charAt(0) : "U"}
              </div>
              {showSignOut && (
                <div className="absolute top-10 right-0 rounded-lg overflow-hidden text-white">
                  <div className="px-4 w-32 py-[0.4rem] bg-zinc-500 font-bold text-sm text-center select-none">
                    {user?.displayName ? user.displayName.split(" ")[0] : "User"}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="px-4 w-32 py-[0.4rem] text-white bg-zinc-500 font-bold text-sm hover:bg-zinc-400 transition-all duration-300 hover:text-zinc-700"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
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
