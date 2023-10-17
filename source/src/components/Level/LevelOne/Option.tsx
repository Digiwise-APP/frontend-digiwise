import React from "react";

import quizStore from "../../../../store/quizStore";

type Option = {
  choice: string;
  choiceValue: string;
};

const Option: React.FC<Option> = ({ choice, choiceValue }) => {
  const { answers, setAnswer, index } = quizStore();
  console.log(`${answers[index]} ${choice}`);

  return (
    <button
      className={`flex h-[38px] w-full max-w-[443px] items-center justify-center rounded-[20px] border-2 border-dashed border-[#232686]  md:h-[65px] ${
        answers[index] === choice ? "bg-red-400" : "bg-transparent"
      }`}
      onClick={() => setAnswer(choice)}
    >
      <p className="font-inter text-black">
        {choice}. {choiceValue}
      </p>
    </button>
  );
};

export default Option;
