import React from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Home from "./Before Logged In/Body/Home";
import Login from "./Login/Login";
import Browse from "./After Logged In/Browse";
import SignUp from "./Login/SignUp";

const Body = () => {

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
  return (
      <div>
        <RouterProvider location={location} key={location.pathname} router={appRouter} />
      </div>
  );
};

export default Body;
