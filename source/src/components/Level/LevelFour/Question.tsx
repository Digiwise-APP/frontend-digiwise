import React from "react";

import quizStore from "../../../../store/quizStore";
import Option from "./Option";

type Option = {
  [key: string]: string;
};

type QuestionProps = {
  question: string;
  options: Option[];
};

const Question: React.FC<QuestionProps> = ({ question, options }) => {
  const { nextQuestion, quiz, index, setPassedResult, submitQuiz } =
    quizStore();

  let button;

  const onSubmitAnswer = () => {
    // call post request to backend, to submit answer and retrive result

    // setPassedResult(true);
    setPassedResult(false);
    submitQuiz();
  };

  const onClickNext = () => {
    nextQuestion();
  };

  if (index === quiz.length - 1) {
    button = (
      <button
        className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
        onClick={onSubmitAnswer}
      >
        <p className="font-inter text-black">Selesai</p>
      </button>
    );
  } else {
    button = (
      <button
        className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
        onClick={onClickNext}
      >
        <p className="font-inter text-black">Selanjutnya</p>
      </button>
    );
  }

  const questionOptions = options.map((option, index) => (
    <Option optionText={option.text} key={index} />
  ));

  return (
    <div className="rounded-[20px]  bg-[#D9D9D9]">
      <div className="flex flex-col items-center gap-14">
        <p className="text-center font-poppins text-[20px] font-bold text-black">
          {question}
        </p>
        <div className="flex flex-col items-center gap-[18px]">
          {questionOptions}
        </div>
      </div>
      <div className="mt-[19px] flex items-center justify-end">{button}</div>
    </div>
  );
};

export default Question;