import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import { model } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";

const useSearchMovies = (searchText) => {
  const dispatch = useDispatch();

  const searchMovies = async (searchText) => {
    const prompt =
      "Act as a movie recommendation system. I want to know what movies are similar to " +
      searchText +
      ". Only give me name of 5 movies, comma separated like this: 'Movie 1, Movie 2, Movie 3, Movie 4, Movie 5'";

    const result = await model.generateContent(prompt);
    const searchedMovies = result.response.text().split(",");

    //this will return an array of promises
    const promiseArray = searchedMovies.map((movie) => serchMovieInTMDB(movie));

    //this will return an array of movie data
    const movieData = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({ movieName: searchedMovies, movieResults: movieData })
    );
  };

  const serchMovieInTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      API_OPTIONS
    );
    const data = await response.json();
    return data;
  };

  return { searchMovies };
};

export default useSearchMovies;
