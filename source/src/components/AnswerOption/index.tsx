import React from "react";

type Option = {
  key: string;
  value: string;
  userAnswer: string;
};

const AnswerOption: React.FC<Option> = ({ key, value, userAnswer }) => {
  console.log(key);
  console.log(value);
  return (
    <button className="bg-transparent flex justify-center items-center rounded-[20px] px-[20px] py-[17px]">
      <p className="font-inter text-black">
        {key}. {value}
      </p>
    </button>
  );
};

export default AnswerOption;
