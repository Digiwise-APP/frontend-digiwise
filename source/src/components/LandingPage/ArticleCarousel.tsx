import React from "react";
import Carousel from "nuka-carousel";
import ArticleCard from "./ArticleCard";
import articleContent from "../../../data/articleContent";

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
      {articleContent.map((v) => {
        return (
          <ArticleCard
            articleImageURL={v.image}
            heading={v.heading}
            articleURL={v.url}
          />
        );
      })}
    </Carousel>
  );
};

export default ArticleCarousel;
