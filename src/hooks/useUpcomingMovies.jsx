import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    const getUpcomingMovies = async() => {
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        }catch(error){
            console.error("Error fetching now playing movies:", error);
        }
    }

    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies()
    },[])
}

export default useUpcomingMovies;