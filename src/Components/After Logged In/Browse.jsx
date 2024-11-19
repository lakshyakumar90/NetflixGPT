import React from "react";
import Header from "../Header"
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header />
      <h1 className="text-white">{user && user.displayName}</h1>
    </div>
  );
};

export default Browse;
