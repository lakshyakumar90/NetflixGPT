import { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  // State to track whether the forward or backward button should be disabled
  const [isForwardDisabled, setIsForwardDisabled] = useState(false);
  const [isBackwardDisabled, setIsBackwardDisabled] = useState(false); // Initially, backward is disabled

  // Scroll percentage (e.g., 70% of the container's width)
  const scrollPercentage = 0.75;

  // Function to scroll forward by a percentage of the container width
  const scrollForward = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = containerWidth * scrollPercentage; // Calculate 70% of container width
      scrollContainerRef.current.scrollBy({
        left: scrollAmount, // Scroll by the calculated pixel amount
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to scroll backward by a percentage of the container width
  const scrollBackward = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = containerWidth * scrollPercentage; // Calculate 70% of container width
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount, // Scroll by the negative of the calculated pixel amount
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to check if the buttons should be enabled or disabled
  const updateButtonStates = () => {
    const container = scrollContainerRef.current;

    if (container) {
      // Disable the forward button if we've scrolled to the end
      setIsForwardDisabled(
        container.scrollLeft + container.clientWidth >= container.scrollWidth
      );

      // Disable the backward button if we're at the start
      setIsBackwardDisabled(container.scrollLeft === 0);
    }
  };

  // Use an effect to update button states whenever the scroll position changes
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", updateButtonStates);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateButtonStates);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    movies && (
      <div className="px-6 py-4">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <div
          ref={scrollContainerRef} // Assign the ref to the scrollable container
          className="flex overflow-x-hidden whitespace-nowrap gap-4"
        >
          {movies.map((movie) => (
            <Link key={movie.id} to={"/browse/" + movie?.id } >
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={scrollBackward}
            disabled={isBackwardDisabled}
            className={`px-4 py-2 bg-gray-500 text-white font-semibold rounded-full transition-all duration-300 ${
              isBackwardDisabled
                ? "opacity-50 cursor-not-allowed"
                : "bg-gray-700 hover:bg-slate-500"
            }`}
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={scrollForward}
            disabled={isForwardDisabled}
            className={`px-4 py-2 bg-gray-500 text-white font-semibold rounded-full transition-all duration-300 ${
              isForwardDisabled
                ? "opacity-50 cursor-not-allowed"
                : "bg-gray-700 hover:bg-slate-500"
            }`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    )
  );
};

export default MovieList;
