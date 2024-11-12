import React from "react";
import { Carousel } from "antd";
import CarouselElement from "./CarouselElement";

const CarouselComponent = () => {
  const data = [
    {
      h1: "Unlimited movies, TV shows and more",
      p: "Starts at 149, cancel at anytime",
      imageId:
        "https://assets.nflxext.com/ffe/siteui/vlv3/61b94313-a53b-4a73-b973-7632aafc9d8f/web_tall_panel/IN-en-20241104-TRIFECTA-perspective_5e478a9d-0baf-4a93-8987-7a8ebf6f7fe8_small.jpg",
    },
    {
      h1: "Devara",
      p: "▪ 2024  ▪ U/A 16+  ▪ Movie  ▪ Action",
      imageId:
        "https://occ-0-2483-2164.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZQkWPKTu9wPgVjVJH_GKDwt1U5tf_Bm-LFg6fYik9iqMrx9UW9dqZRFupZYwV9ATeHsWJRh95Xk52PVefoNAj3N5LaxcqW39ZBe.webp?r=dc1",
    },
    {
      h1: "The Great Indian Kapil Show",
      p: "▪ 2024  ▪ U/A ▪ 16+  ▪ Shows  ▪ Comedy",
      imageId:
        "https://occ-0-2483-2164.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABXM_Jf5Ejbi7MCLzI_UBFkc0i8ia2cc2SxK3fnUBoDfSrsKKHPP7oMQ5icGihZrQejSsEado06wR5kBOF26VNA1XDh74cAd_R2D0.webp?r=ea0",
    },
  ];
  return (
    <Carousel
      className="w-full px-[2rem] pb-6"
      autoplay
    >
      {data.map((item, index) => {
        return (
          <CarouselElement
            key={index}
            h1={item.h1}
            p={item.p}
            imageId={item.imageId}
          />
        );
      })}
    </Carousel>
  );
};
export default CarouselComponent;
