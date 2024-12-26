import { useSelector } from "react-redux";
import Recommendations from "../../Info/Recommendations";
const GptSuggestions = () => {
    const gpt = useSelector((store) => store.gpt);
    const {movieName, movieResults} = gpt;

    if(!movieName || movieResults.length === 0) return null;
    
    return (
        <div className="mt-10">
            {movieName.map((movie, index) => (
                <div key={index}>
                    <Recommendations heading={movie} recommendations={movieResults[index]} />
                </div>
            ))}
        </div>
    )
}

export default GptSuggestions;