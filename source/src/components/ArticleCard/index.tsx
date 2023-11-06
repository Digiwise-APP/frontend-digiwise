import React from "react";

type ArticleCardProps = {
  image: string;
  heading: string;
  paragraph: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  heading,
  paragraph,
}) => {
  return (
    <div className="card rounded-[13px] border-[1px] border-solid border-[#9D9D9D] bg-base-100  shadow-[0px_4px_4px_0px_rgb(0,0,0,0.25)] lg:card-side">
      <figure>
        <img src={image} className="min-h-full w-full md:max-w-[310px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-poppins text-[12px] font-bold">
          {heading}
        </h2>
        <p className="font-poppins text-[12px] leading-[20px]">{paragraph}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
