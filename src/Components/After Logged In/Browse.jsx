import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import usePopularMovies from "../../hooks/usePopularMovies";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useMovieGenre from "../../hooks/useMovieGenre";
import MainContainer from "./Main Container/MainContainer";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movies);

  usePopularMovies();
  useNowPlayingMovies();
  // useMovieGenre();
  // useTopRatedMovies()
  useUpcomingMovies();
 
  return (
    <div className="text-white">
      <Header />

      <MainContainer />

      <h1>{user && user.displayName}</h1>
      {/* Conditional rendering for movies
      {movies.popularMovies?.length > 0 ? (
        movies.popularMovies.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

      <br/><br/>
      {movies.nowPlayingMovies?.length > 0 ? (
        movies.nowPlayingMovies.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default Browse;
