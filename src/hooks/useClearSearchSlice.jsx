import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearGptMovies } from "../utils/gptSlice";
import { useEffect } from "react";

const useClearSearchSlice = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('gptsearch')) {
      dispatch(clearGptMovies());
    }
  }, [location, dispatch]);
}   

export default useClearSearchSlice;