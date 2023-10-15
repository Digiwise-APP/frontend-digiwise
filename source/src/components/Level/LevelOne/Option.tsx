import React from "react";

type Option = {
  choice: string;
  choiceValue: string;
  onClick: (choice: string) => void;
  hasAnswered: boolean;
  userAnswer: string;
};

const Option: React.FC<Option> = ({
  choice,
  choiceValue,
  hasAnswered,
  onClick,
  userAnswer,
}) => {
  return (
    <button
      disabled={hasAnswered}
      className={`flex h-[38px] w-full max-w-[443px] items-center justify-center rounded-[20px] border-2 border-dashed border-[#232686] bg-transparent md:h-[65px] ${
        choice === userAnswer ? "disabled:bg-red-400" : "disabled:bg-gray-400"
      }`}
      onClick={() => onClick(choice)}
    >
      <p className="font-inter text-black">
        {choice}. {choiceValue}
      </p>
    </button>
  );
};

export default Option;
