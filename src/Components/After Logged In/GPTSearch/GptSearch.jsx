import { Link, useLocation } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../../../utils/constants";
import GptForm from "./GptForm";
import { changeLanguage } from "../../../utils/configSlice";
import { useDispatch, useSelector } from "react-redux";
import GptSuggestions from "./GptSuggestions";
import { useState, useEffect } from "react";
import { clearGptMovies } from "../../../utils/gptSlice";

const renderLogo = () => (
  <Link to="/">
    <div>{LOGO}</div>
  </Link>
);

const GptSearch = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const movieResults = useSelector((store) => store.gpt.movieResults);

  useEffect(() => {
    if (movieResults) {
      setIsLoading(false);
    }
  }, [movieResults]);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="relative text-white">
      <div className="absolute w-full flex justify-between items-center px-8 pt-5">
        <div>{renderLogo()}</div>
        <select
          onChange={handleLanguageChange}
          className="text-white bg-zinc-700 rounded-full px-2 py-1 rounded-lg outline-none"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="min-h-screen pt-20">
        <GptForm setIsLoading={setIsLoading} isLoading={isLoading} />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
