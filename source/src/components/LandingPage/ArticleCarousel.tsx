import React from "react";
import Carousel from "nuka-carousel";
import ArticleCard from "./ArticleCard";

const ArticleCarousel = () => {
  return (
    <Carousel
      className="rounded-3xl"
      autoplay
      autoplayInterval={2000}
      wrapAround={true}
      defaultControlsConfig={{
        nextButtonText: "❯",
        prevButtonText: "❮",
      }}
    >
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Carousel>
  );
};

export default ArticleCarousel;
