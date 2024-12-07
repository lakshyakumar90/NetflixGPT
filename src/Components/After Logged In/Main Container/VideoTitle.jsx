import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({movie}) => {
  return (
      <div className="w-full h-[650px] overflow-hidden bg-gradient-to-r from-black absolute top-0">
        <div className="w-[30%] absolute left-[30px] top-[52%]">
        <h1 className="text-4xl font-bold pb-4">
          {movie.original_title}
        </h1>
        <p className="text-slate-200 line-clamp-3 text-ellipsis">
          {movie.overview}
        </p>
        <div className="flex gap-2 mt-4">
          <button className="px-6 py-2 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-opacity-80 transition-all">
            <FaPlay />
            Play
          </button>
          <button className="px-6 py-2 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-opacity-80 transition-all">
            <IoMdInformationCircleOutline />
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
