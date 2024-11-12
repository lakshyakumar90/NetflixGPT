import React from "react";

const MovieCard = ({ onClick, data }) => {
  const { imageId} = data;
  return (
    <div
      onClick={onClick}
      className="inline-block h-full w-[18%] mr-4 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
    >
      <img className="h-full w-full object-cover hover:scale-102 transition duration-300 ease-in-out" src={imageId} />
    </div>
  );
};

export default MovieCard;
