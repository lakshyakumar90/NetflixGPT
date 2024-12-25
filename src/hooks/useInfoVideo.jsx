import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useInfoVideo = (id) => {
    const [infoVideo, setInfoVideo] = useState(null);

    const getInfoVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const json = await response.json();
        setInfoVideo(json.results);
    }

    useEffect(() => {
        getInfoVideo();
    }, [id]);

    return infoVideo;
}

export default useInfoVideo;