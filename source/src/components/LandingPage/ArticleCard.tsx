import React from "react";
import Article1 from "../../assets/articles1.png";
import { Link } from "react-router-dom";

type ArticleCardType = {
  articleImageURL: string;
  heading: string;
  articleURL: string;
};

const ArticleCard: React.FC<ArticleCardType> = ({
  articleImageURL,
  heading,
  articleURL,
}) => {
  function goToArticlePage() {
    window.open(articleURL);
  }

  return (
    <div className="mx-2 flex items-center justify-center">
      <div className="relative h-[400px] w-full rounded-3xl bg-black md:h-[600px]">
        <img
          src={articleImageURL}
          className="pointer-events-none absolute h-full w-full rounded-3xl object-cover brightness-50"
        />
        <div className="absolute h-full w-full">
          <div className="flex h-full w-full flex-col items-center justify-center px-20 md:px-32">
            <p className="text-center font-rowdies text-xl font-bold leading-normal text-gray-300 md:text-5xl">
              {heading}
            </p>
            <button
              className="sm:text-md my-10 h-14 w-full rounded-2xl bg-blue-300 text-xs text-black hover:bg-blue-400  md:w-1/3 md:rounded-full md:text-xl"
              onClick={goToArticlePage}
            >
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
