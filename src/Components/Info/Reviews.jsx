const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;
  const shouldAnimate = reviews.length > 3;

  return (
    <div className="p-8 rounded-2xl mb-8">
      <h2 className="text-3xl font-bold mb-6 text-white/90">Reviews</h2>
      <div className="relative w-full overflow-hidden">
        <div className={`flex ${shouldAnimate ? 'animate-[scroll_30s_linear_infinite]' : ''} space-x-4`}>
          {reviews?.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[400px] bg-zinc-900 p-4 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                {review.author_details.avatar_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`}
                    className="w-8 h-8 rounded-full"
                    alt={review.author}
                  />
                )}
                <div>
                  <h3 className="font-semibold">{review.author}</h3>
                  {review.author_details.rating && (
                    <p className="text-sm text-yellow-400">
                      Rating: {review.author_details.rating}/10
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm line-clamp-4">{review.content}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(review.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
          {/* Duplicate reviews for seamless loop only if shouldAnimate is true */}
          {shouldAnimate && reviews?.map((review) => (
            <div
              key={review.id + "-duplicate"}
              className="flex-shrink-0 w-[400px] bg-black/20 p-4 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                {review.author_details.avatar_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`}
                    className="w-8 h-8 rounded-full"
                    alt={review.author}
                  />
                )}
                <div>
                  <h3 className="font-semibold">{review.author}</h3>
                  {review.author_details.rating && (
                    <p className="text-sm text-yellow-400">
                      Rating: {review.author_details.rating}/10
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm line-clamp-4">{review.content}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(review.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
        {shouldAnimate && (
          <style>
            {`
              @keyframes scroll {
                  0% {
                      transform: translateX(0);
                  }
                  100% {
                      transform: translateX(-50%);
                  }
              }
            `}
          </style>
        )}
      </div>
    </div>
  );
};

export default Reviews;
