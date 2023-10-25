import React from "react";
import quizStore from "../../../../../../store/quizStore";

type OptionProps = {
  options: string[];
};

const OptionTypeFour: React.FC<OptionProps> = ({ options }) => {
  const { answers, setAnswerMultiple, index } = quizStore();
  const questionIndex = index;
  const alphabets = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="flex w-full flex-wrap gap-[8px]">
      {options.map((option, index) => (
        <div key={index} className="flex flex-col gap-[10px]">
          <p className="font-poppins text-[12px] text-black md:text-[24px]">
            {option}
          </p>
          <button
            className={`flex h-[15px] w-full max-w-[310] items-center justify-center rounded-[20px] border-[1px]   border-[#232686] md:h-[31px] ${
              answers[questionIndex]?.includes(option)
                ? "border-solid bg-[#8D8EBA]"
                : "border-dashed bg-transparent"
            }`}
            onClick={() => setAnswerMultiple(option)}
          >
            <p
              className={`font-poppins text-[12px] ${
                answers[questionIndex]?.includes(option)
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {alphabets[index]}
            </p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default OptionTypeFour;
