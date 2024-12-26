import React, { useEffect } from "react";
import Header from "../Header";
import { useSelector } from "react-redux";
import usePopularMovies from "../../hooks/usePopularMovies";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useMovieGenre from "../../hooks/useMovieGenre";
import MainContainer from "./Main Container/MainContainer";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";
import useClearSearchSlice from "../../hooks/useClearSearchSlice";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movies);

  usePopularMovies();
  useNowPlayingMovies();
  useMovieGenre();
  useTopRatedMovies()
  useUpcomingMovies();
  useClearSearchSlice();
 
  return (
    <div className="text-white">
      <Header />
      <MainContainer />
      <SecondaryContainer movies={movies}/>
      <h1>{user && user.displayName}</h1>
    </div>
  );
};

export default Browse;
