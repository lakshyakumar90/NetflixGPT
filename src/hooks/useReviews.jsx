import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useReviews = (id) => {
    const [reviews, setReviews] = useState(null);

    const getReviews = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, API_OPTIONS);
        const json = await response.json();
        setReviews(json.results);
    }

    useEffect(() => {
        getReviews();
    }, [id]);

    return reviews;
}

export default useReviews;