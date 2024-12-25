import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieGenre = () => {
  const getMovieGenre = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list",
        API_OPTIONS
      );
      const json = await response.json();
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getMovieGenre();
  }, []);

  return <div></div>;
};

export default useMovieGenre;
