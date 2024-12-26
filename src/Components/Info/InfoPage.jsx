import { Link, useParams } from "react-router-dom";
import InfoVideo from "./InfoVideo";
import Recommendations from "./Recommendations";
import Reviews from "./Reviews";
import useRecommendations from "../../hooks/useRecommendations";
import useReviews from "../../hooks/useReviews";
import useInfoVideo from "../../hooks/useInfoVideo";
import useInfo from "../../hooks/useInfo";
import MainInfo from "./MainInfo";
import { LOGO } from "../../utils/constants";

const InfoPage = () => {
  const { id } = useParams();
  const info = useInfo(id); 
  const recommendations = useRecommendations(id);
  const reviews = useReviews(id);
  const infoVideo = useInfoVideo(id);
  if (!info) return null;

  const renderLogo = () => (
    <Link to="/">
      <div className="absolute px-8 py-6 z-[11]">
        {LOGO}
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div>
        {renderLogo()}
      </div>
      <MainInfo info={info} />
      <InfoVideo infoVideo={infoVideo} />
      <Recommendations heading="Recommendations" recommendations={recommendations} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default InfoPage;
