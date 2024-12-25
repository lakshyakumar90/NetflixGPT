import MovieList from "./MovieList";

const SecondaryContainer = ({ movies }) => {
  return (
    movies && (
      <div>
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    )
  );        
};

export default SecondaryContainer;
