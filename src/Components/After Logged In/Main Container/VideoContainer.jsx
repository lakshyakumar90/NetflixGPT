import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const VideoContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0 && !randomMovie) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies, randomMovie]);

  if (!randomMovie) return null;

  return (
    <div className="relative">
      {randomMovie && <VideoBackground movie={randomMovie} />}
      {randomMovie && <VideoTitle movie={randomMovie} />}
    </div>
  );
};

export default VideoContainer;
