import React from "react";
import Article1 from "../../assets/articles1.png";

const ArticleCard = () => {
  return (
    <div className="mx-2 flex items-center justify-center">
      <div className="relative h-[600px] w-full rounded-3xl bg-black">
        <img
          src={Article1}
          className="pointer-events-none absolute h-full w-full rounded-3xl object-cover brightness-50"
        />
        <div className="absolute h-full w-full">
          <div className="flex h-full w-full flex-col items-center justify-center px-32">
            <p className="text-center font-rowdies text-5xl font-bold leading-normal text-gray-300">
              Triwulan Pertama 2023, Kominfo Identifikasi 425 Isu Hoaks
            </p>
            <button className="my-10 flex h-14 w-1/3 items-center justify-center rounded-full bg-blue-300 text-xl text-black hover:bg-blue-400">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
