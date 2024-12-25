import React from "react";
import useHomePageMovieTrailer from "../../../hooks/useHomePageMovieTrailer";

const VideoBackground = ({ movie }) => {
  const movieId = movie.id;
  const trailerVideo = useHomePageMovieTrailer(movieId);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {trailerVideo ? (
        <iframe
          className="absolute top-[-2%] left-0 aspect-video w-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
