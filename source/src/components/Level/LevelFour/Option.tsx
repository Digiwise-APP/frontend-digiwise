import React from "react";
import quizStore from "../../../../store/quizStore";

type OptionProps = {
  optionText: string;
  alphabet: string;
};

const Option: React.FC<OptionProps> = ({ optionText, alphabet }) => {
  const { answers, setAnswerMultiple, index } = quizStore();

  const onChooseAnswer = () => {
    setAnswerMultiple(optionText);
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-poppins text-[12px] text-black md:text-[24px]">
        {optionText}
      </p>
      <button
        className={`flex h-[15px] w-full max-w-[310] items-center justify-center rounded-[20px] border-[1px]   border-[#232686] md:h-[31px] ${
          answers[index]?.includes(optionText)
            ? "border-solid bg-[#8D8EBA]"
            : "border-dashed bg-transparent"
        }`}
        onClick={onChooseAnswer}
      >
        <p
          className={`font-poppins text-[12px] ${
            answers[index]?.includes(optionText) ? "text-white" : "text-black"
          }`}
        >
          {alphabet}
        </p>
      </button>
    </div>
  );
};

export default Option;
