import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useRecommendations = (id) => {
    const [recommendations, setRecommendations] = useState(null);

    const fetchRecommendations = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, API_OPTIONS);
        const json = await response.json();
        setRecommendations(json);
    }

    useEffect(() => {
        fetchRecommendations();
    }, [id]);

    return recommendations;
}
export default useRecommendations;
