import React from "react";

import quizStore from "../../../../store/quizStore";

type Option = {
  url_image?: string;
  options: string[];
};

const OptionTypeOne: React.FC<Option> = ({ url_image, options }) => {
  const { answers, setAnswer, index } = quizStore();
  const questionIndex = index;
  const alphabets = ["A", "B", "C", "D"];

  return (
    <div className="flex flex-col justify-center gap-[30px] md:gap-[35px]">
      <div className="flex justify-center">
        <img
          src={url_image}
          className="h-[116px] w-[208px] md:h-[232px] md:w-[416px]"
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        {options.map((option, index) => (
          <button
            key={index}
            className={`flex w-full max-w-[443px] items-center rounded-[20px] border-2 border-dashed border-[#232686] px-[8px] py-[7px] md:h-[65px] md:justify-center md:px-[10px] md:py-[8px] ${
              answers[questionIndex] === option
                ? "bg-red-400"
                : "bg-transparent"
            }`}
            onClick={() => setAnswer(option)}
          >
            <p className="text-left font-poppins text-[11px] text-black md:text-center md:text-[13px]">
              {alphabets[index]}. {option}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionTypeOne;
