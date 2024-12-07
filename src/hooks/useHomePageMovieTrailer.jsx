import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideo} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useHomePageMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  const fetchTrailerVideo = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await response.json();
      
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      fetchTrailerVideo(movieId);
    }
  }, [movieId]);

  return trailerVideo;
};

export default useHomePageMovieTrailer;
