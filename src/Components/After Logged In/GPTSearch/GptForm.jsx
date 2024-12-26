import { useSelector } from "react-redux";
import lang from "../../../utils/lang";
import useSearchMovies from "../../../hooks/useSearchMovies";
import { useRef } from "react";

const GptForm = ({ setIsLoading, isLoading }) => {

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { searchMovies } = useSearchMovies();

  const handleSearchClick = async () => {
    if (searchText.current?.value) {
      setIsLoading(true);
      await searchMovies(searchText.current.value);
    }
  };

  return (
    <>
    <h1 className="pl-4 text-3xl font-bold py-4">{lang[langKey].gptSearch}</h1>
    <div className="flex justify-center items-center">
      <form className="w-full px-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-4">
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="w-[30vw] px-2 text-sm rounded-lg bg-slate-50 text-zinc-900 placeholder-zinc-900 outline-none border-2 border-transparent transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-sm text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSearchClick}
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default GptForm;
