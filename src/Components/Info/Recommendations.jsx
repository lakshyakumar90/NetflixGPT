import { Link } from "react-router-dom";

const Recommendations = ({ recommendations, heading }) => {
  if (!recommendations || recommendations.results.length === 0) return null;
  const recommendedMovies = recommendations?.results.filter(movie => movie.poster_path);

  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold py-4">{heading}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
        <div className="flex gap-4 ">
          {recommendedMovies?.map((movie) => (
            <Link key={movie.id} to={"/browse/" + movie?.id}>
              <div className="flex-none w-48 overflow-hidden">
                <div className="relative h-72 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-white text-sm font-semibold">
                      {movie.title}
                    </h2>
                    <p className="text-gray-300 text-xs">
                      {movie.release_date?.split("-")[0]} • ⭐{" "}
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
