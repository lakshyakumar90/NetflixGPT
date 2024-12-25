const MainInfo = ({ info }) => {
  return (
    <div className="relative h-[100vh]">
      {/* Backdrop Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`}
          alt=""
          className="w-full h-[100vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
              alt={info.title}
              className="w-72 rounded-xl shadow-2xl"
            />
          </div>

          {/* Movie Details */}
          <div className="flex-grow mt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {info.title}
              <span className="text-2xl text-gray-400 ml-4">
                ({new Date(info.release_date).getFullYear()})
              </span>
            </h1>

            {/* Metadata Row */}
            <div className="flex items-center gap-4 text-gray-300 mb-6">
              <span className="px-2 py-1 bg-yellow-500 text-black rounded font-semibold">
                {info.vote_average.toFixed(1)} ★
              </span>
              <span>{info.runtime} min</span>
              <span>{info.release_date}</span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {info.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-zinc-800 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Tagline */}
            {info.tagline && (
              <p className="text-xl italic text-gray-400 mb-4">
                "{info.tagline}"
              </p>
            )}

            {/* Overview */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{info.overview}</p>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-gray-400">Status</h3>
                <p>{info.status}</p>
              </div>
              <div>
                <h3 className="text-gray-400">Budget</h3>
                <p>${info.budget?.toLocaleString()}</p>
              </div>
              <div>
                <h3 className="text-gray-400">Revenue</h3>
                <p>${info.revenue?.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
