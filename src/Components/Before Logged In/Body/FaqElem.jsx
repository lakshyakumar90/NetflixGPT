import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const FaqElem = ({ elem, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-7 py-6 w-full bg-[rgb(46,46,46)] rounded-xl mb-5 text-white text-xl font-semibold cursor-pointer hover:bg-[rgb(83,83,83)] transition-all"
    >
      <div className="flex items-center justify-between">
        <h1>{elem.title}</h1>
        <p className={`transition-transform duration-300 ${isSelected ? 'rotate-45' : ''}`}>
          <GoPlus />
        </p>
      </div>
    </div>
  );
};

export default FaqElem;
