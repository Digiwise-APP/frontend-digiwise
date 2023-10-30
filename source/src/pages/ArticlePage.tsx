import React from "react";

// dummy
import articles from "../../data/dummy/article";

import ArticleCard from "../components/ArticleCard";

const ArticlePage = () => {
  return (
    <div
      data-theme="light"
      className="flex min-h-screen justify-center py-[54px]"
    >
      <div className="mb-20 flex max-w-[1000px] flex-col items-center px-4 md:mb-0 md:px-7">
        <h1 className="mb-[56px] text-center font-rowdies text-[30px] font-bold text-black md:text-[50px]">
          For Your Literature
        </h1>
        <div className="flex flex-col gap-[16px]">
          {articles.map((article) => (
            <ArticleCard
              image={article.image}
              heading={article.heading}
              paragraph={article.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
