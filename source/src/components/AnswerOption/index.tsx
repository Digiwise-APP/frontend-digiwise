import React, { useState } from 'react';

import quizStore from '../../../store/quizStore';

type Option = {
  choice: string;
  choiceValue: string;
  onClick: (choice: string) => void;
  hasAnswered: boolean;
  userAnswer: string;
};

const AnswerOption: React.FC<Option> = ({ choice, choiceValue, hasAnswered, onClick, userAnswer }) => {
  return (
    <button
      disabled={hasAnswered}
      className={`bg-transparent border-dashed border-2 border-[#232686] flex justify-center items-center rounded-[20px] w-[443px] h-[65px] ${choice === userAnswer ? 'disabled:bg-red-400' : 'disabled:bg-gray-400'}`}
      onClick={() => onClick(choice)}
    >
      <p className="font-inter text-black">
        {choice}. {choiceValue}
      </p>
    </button>
  );
};

export default AnswerOption;
