import React from "react";

const CarouselElement = ({h1, p, imageId}) => {
  return (
    <div
      className="h-[500px] relative w-full bg-white rounded-2xl "
      style={{
        maskImage:
          "radial-gradient(103% 10.5% at 50% 102%, transparent 50%, white 52%)",
      }}>
      <div
        className="absolute top-0 left-0 h-full w-full z-10 "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.90) 2.25%, rgba(0, 0, 0, 0.40) 64.5%)",
        }}></div>
      <img
        className="h-full w-full object-cover "
        src={imageId}
      />
      <div className="absolute bottom-10 text-white left-1/2 transform -translate-x-1/2 z-20 w-[40%]">
        <h1 className="text-center text-5xl font-bold">{h1}</h1>
        <p className="text-center mt-2 text-xl text-slate-300">{p}</p>
      </div>
    </div>
  );
};

export default CarouselElement;
