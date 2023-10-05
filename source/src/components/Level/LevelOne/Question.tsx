import React, { useState } from "react";
import AnswerOption from "../../AnswerOption";

import quizStore from "../../../../store/quizStore";

interface Option {
  [key: string]: string;
}

export type Question = {
  question: string;
  image: string;
  options: Option;
};

const Question: React.FC<Question> = ({ image, question, options }) => {
  const [userAnswer, setUserAnswer] = useState<string>("");
  const { nextQuestion } = quizStore();
  return (
    <div className="bg-[#D9D9D9] px-[55px] py-[53px] rounded-[20px]">
      <p className="text-[12px] font-poppins font-bold text-black text-center">
        {question}
      </p>
      <img src={image} className="w-10 h-10" />
      {Object.entries(options).map((value) => (
        <AnswerOption value={value[1]} key={value[0]} userAnswer={userAnswer} />
      ))}
      <div className="flex justify-end items-center mt-[93px]">
        <button
          className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
          onClick={() => nextQuestion()}
        >
          <p className="font-inter text-black">Selanjutnya</p>
        </button>
      </div>
    </div>
  );
};

export default Question;
