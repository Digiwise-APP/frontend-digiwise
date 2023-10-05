import React from "react";
import AnswerOption from "../../AnswerOption";

interface Option {
  [key: string]: string;
}

export type Question = {
  image: string;
  question: string;
  options: Option;
};

const Question: React.FC<Question> = ({ image, question, options }) => {
  return (
    <div className="bg-[#D9D9D9] px-[55] py-[53px] rounded-[20px]">
      <p className="text-[12px] font-poppins font-bold text-black text-center">
        {question}
      </p>
      <img src={image} />
      {Object.entries(options).map((value, key) => (
        <AnswerOption />
      ))}
      <div className="flex justify-end items-center mt-[93px]">
        <button className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]">
          <p className="font-inter text-black">Selanjutnya</p>
        </button>
      </div>
    </div>
  );
};

export default Question;
