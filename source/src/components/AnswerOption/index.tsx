import React from 'react';

type Option = {
  choice: string;
  choiceValue: string;
  userAnswer: string;
};

const AnswerOption: React.FC<Option> = ({ choice, choiceValue, userAnswer }) => {
  return (
    <button className="bg-transparent border-dashed border-2 border-[#232686] flex justify-center items-center rounded-[20px] w-[443px] h-[65px]">
      <p className="font-inter text-black">
        {choice}. {choiceValue}
      </p>
    </button>
  );
};

export default AnswerOption;
