import React from "react";

import quizStore from "../../../../../../store/quizStore";

type OptionProps = {
  options: string[];
};

const OptionTypeTwo: React.FC<OptionProps> = ({ options }) => {
  const { answers, index, setAnswer } = quizStore();
  const [firstOption, secondOption] = options;

  let optionContent;

  if (firstOption === "BENAR") {
    optionContent = (
      <div className="flex gap-[40px]">
        <div
          className={`flex h-[200px] w-[178px] cursor-pointer items-center justify-center rounded-[20px] p-2 md:h-[400px] md:w-[359px] ${
            answers[index] === firstOption ? "bg-[#4B4D88BF]" : "bg-[#2C9F4D]"
          }`}
          onClick={() => setAnswer(firstOption)}
        >
          <p className="font-poppins text-[40px] font-bold text-[##D9D9D9] text-[#D9D9D9]">
            {firstOption}
          </p>
        </div>
        <div
          className={`flex h-[200px] w-[178px] cursor-pointer items-center justify-center rounded-[20px] p-2 md:h-[400px] md:w-[359px] ${
            answers[index] === secondOption ? "bg-[#4B4D88BF]" : "bg-[#D45A5A]"
          }`}
          onClick={() => setAnswer(secondOption)}
        >
          <p className="font-poppins text-[40px] font-bold text-[##D9D9D9] text-[#D9D9D9]">
            {secondOption}
          </p>
        </div>
      </div>
    );
  } else {
    optionContent = (
      <div className="flex gap-[40px]">
        <div
          className={`cursor-pointer p-2 ${
            answers[index] === firstOption ? "rounded-xl bg-red-400" : ""
          } `}
          onClick={() => setAnswer(firstOption)}
        >
          <img
            src={firstOption}
            className="h-[200px] w-[178px] md:h-[400px] md:w-[359px]"
          />
        </div>
        <div
          className={`cursor-pointer p-2  ${
            answers[index] === secondOption ? "rounded-xl bg-red-400" : ""
          } `}
          onClick={() => setAnswer(secondOption)}
        >
          <img
            src={secondOption}
            className="h-[200px] w-[178px] md:h-[400px] md:w-[359px]"
          />
        </div>
      </div>
    );
  }
  return optionContent;
};

export default OptionTypeTwo;
