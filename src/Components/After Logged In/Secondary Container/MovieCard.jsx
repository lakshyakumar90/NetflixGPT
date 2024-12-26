import { TMDB_IMG_CDN } from "../../../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="h-[250px]">
      <div className="h-[90%] overflow-hidden flex items-center justify-center rounded-lg hover:scale-[1.03] hover:rounded-lg transition-all mt-4 cursor-pointer">
        <div className="h-[200px] w-[330px] whitespace-nowrap overflow-hidden rounded">
          <img
            className="w-full h-full object-cover"
            alt={movie.title}
            src={TMDB_IMG_CDN + movie.poster_path}
          />
        </div>
      </div>
      <div className="flex flex-col -mt-1">
      <h2 className="text-white text-sm font-semibold">{movie.title}</h2>
    </div>
    </div>
  );
};

export default MovieCard;
