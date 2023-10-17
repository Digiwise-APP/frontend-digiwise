import React, { useState } from "react";

const articles = [
  {
    url: "https://cekfakta.com",
    title:
      "We have launched Flowbite Blocks featuring over 330+ website sections! ",
  },
  {
    url: "cekfakta.com",
    title:
      "We have launched Flowbite Blocks featuring over 330+ website sections! ",
  },
  {
    url: "cekfakta.com",
    title:
      "We have launched Flowbite Blocks featuring over 330+ website sections! ",
  },
  {
    url: "cekfakta.com",
    title:
      "We have launched Flowbite Blocks featuring over 330+ website sections! ",
  },
  {
    url: "cekfakta.com",
    title:
      "We have launched Flowbite Blocks featuring over 330+ website sections! ",
  },
];

const RelatedArticles = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="md:w-1/ w-2/3">
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
          checked={open}
          onClick={() => setOpen(!open)}
        />
        <div className="collapse-title text-xl font-medium">
          Related Articles
        </div>
        <div className="collapse-content">
          {articles.map((article) => {
            return (
              <div className="py-2">
                <small>{article.url}</small>
                <br />
                <a className="text-blue-700" href={article.url}>
                  {article.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
