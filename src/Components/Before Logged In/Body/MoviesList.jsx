import { useEffect, useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import MovieCard from "./MovieCard";
import { trendingMovieData } from "../../../utils/Before login/movieList";
import { onlyOnNetflixMovieData } from "../../../utils/Before login/onlyOnNetflix";
import "../../../index.css";
import GetStartedButton from "./GetStartedButton";
const MoviesList = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isTranslated1, setIsTranslated1] = useState(false);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedMovie(null);
  };

  const handleClick = () => {
    setIsTranslated(!isTranslated);
  };

  const handleClick1 = () => {
    setIsTranslated1(!isTranslated1);
  };

  return (
    <div className="mx-20 my-4 relative">

      <h1 className="text-white font-bold text-3xl">Trending Now</h1>
      <div className="overflow-hidden py-8 relative">
        <div
          className={`h-[17rem] whitespace-nowrap w-full transition-transform duration-500 ${
            isTranslated ? "-translate-x-[95%]" : ""
          }`}
        >
          {trendingMovieData.map((movie) => (
            <MovieCard
              key={movie.id}
              onClick={() => handleCardClick(movie)}
              data={movie}
            />
          ))}
        </div>

        {isTranslated ? (
          <button
            onClick={handleClick}
            className="absolute left-10 top-1/2 -translate-y-1/2 text-white py-4 rounded-full bg-zinc-400"
          >
            <HiChevronLeft className="text-3xl" />
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-white py-4 rounded-full bg-zinc-400"
          >
            <HiChevronRight className="text-3xl" />
          </button>
        )}

        {isPopupVisible && selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[54%] h-[85%] relative overflow-hidden bg-[rgb(22,22,22)] ">
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 z-50 text-white text-3xl font-bold"
              >
                ×
              </button>
              <div id="pop-img" className="h-[60%] w-full relative">
                <img
                  className="h-full w-full object-cover"
                  src={selectedMovie.popImg}
                />
                <div className="absolute bottom-2 h-20 z-50 left-8" >
                  <img className="h-full w-full object-cover" src={selectedMovie.nameImg} />
                </div>
              </div>
              <div className="h-[40%] w-full bg-[rgb(22,22,22)] p-8 flex flex-col gap-2">
                <p className="text-white">{selectedMovie.info.join(" . ")}</p>
                <p className="text-white">{selectedMovie.description}</p>
                <GetStartedButton />
              </div>
            </div>
          </div>
        )}
      </div>

      <h1 className="text-white font-bold mt-16 text-3xl">Only on Netflix</h1>
      <div className="overflow-hidden py-8 relative">
        <div
          className={`h-[17rem] whitespace-nowrap w-full transition-transform duration-500 ${
            isTranslated1 ? "-translate-x-[95%]" : ""
          }`}
        >
          {onlyOnNetflixMovieData.map((movie) => (
            <MovieCard
              key={movie.id}
              onClick={() => handleCardClick(movie)}
              data={movie}
            />
          ))}
        </div>

        {isTranslated1 ? (
          <button
            onClick={handleClick1}
            className="absolute left-10 top-1/2 -translate-y-1/2 text-white py-4 rounded-full bg-zinc-400"
          >
            <HiChevronLeft className="text-3xl" />
          </button>
        ) : (
          <button
            onClick={handleClick1}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-white py-4 rounded-full bg-zinc-400"
          >
            <HiChevronRight className="text-3xl" />
          </button>
        )}

        {isPopupVisible && selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[54%] h-[85%] relative overflow-hidden bg-[rgb(22,22,22)] ">
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 z-50 px-2 pb-1 rounded-full transition-all text-white text-2xl font-bold hover:bg-[#FFFFFF77]" 
              >
                ×
              </button>
              <div id="pop-img" className="h-[60%] w-full relative">
                <img
                  className="h-full w-full object-cover"
                  src={selectedMovie.popImg}
                />
                <div className="absolute bottom-2 h-20 z-50 left-8" >
                  <img className="h-full w-full object-cover" src={selectedMovie.nameImg} />
                </div>
              </div>
              <div className="h-[40%] w-full bg-[rgb(22,22,22)] p-8 flex flex-col gap-2">
                <p className="text-white">{selectedMovie.info.join(" . ")}</p>
                <p className="text-white">{selectedMovie.description}</p>
                <GetStartedButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
