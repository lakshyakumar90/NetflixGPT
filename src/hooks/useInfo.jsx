import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useInfo = (id) => {
    const [info, setInfo] = useState(null);

    const fetchInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
        const json = await response.json();
        setInfo(json);
    }

    useEffect(() => {
        fetchInfo();
    }, [id]);

    return info;
}

export default useInfo;
