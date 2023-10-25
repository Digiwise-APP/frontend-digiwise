import React from "react";

import quizStore from "../../../../store/quizStore";

type Option = {
  url_image?: string;
  options: string[];
};

const Option: React.FC<Option> = ({ url_image, options }) => {
  const { answers, setAnswer, index } = quizStore();
  const questionIndex = index;
  const alphabets = ["A", "B", "C", "D"];

  return (
    <div className="flex flex-col justify-center gap-[30px] md:gap-[35px]">
      <div className="flex justify-center">
        <img src={url_image} className="h-[232px] w-[416px]" />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        {options.map((option, index) => (
          <button
            className={`flex h-[38px] w-full max-w-[443px] items-center justify-center rounded-[20px] border-2 border-dashed border-[#232686]  md:h-[65px] ${
              answers[questionIndex] === option
                ? "bg-red-400"
                : "bg-transparent"
            }`}
            onClick={() => setAnswer(option)}
          >
            <p className="font-inter text-black">
              {alphabets[index]}. {option}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Option;
