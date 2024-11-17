import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Before Logged In/Body/Home";
import Login from "./Login/Login";
import Browse from "./After Logged In/Browse";
import SignUp from "./Login/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [])
  

  return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
  );
};

export default Body;
