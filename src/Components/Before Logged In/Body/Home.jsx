import React from "react";
import Header from "../../Header";
import CarouselComponent from "./CarouselComponent";
import Email from "./Email";
import MoviesList from "./MoviesList";
import JoinReason from "./JoinReason";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black  w-full">
      <Header />
      <CarouselComponent />
      <Email />
      <MoviesList />
      <JoinReason />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
