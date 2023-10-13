import React, { useState } from "react";
import Option from "./Option";

import quizStore from "../../../../store/quizStore";

export type Question = {
  question: string;
  image: string;
  options: { [key: string]: string };
};

const Question: React.FC<Question> = ({ image, question, options }) => {
  const [hasAnswered, sethasAnswered] = useState<boolean>(false);
  const {
    nextQuestion,
    quiz,
    index,
    setPassedResult,
    submitQuiz,
    setAnswer,
    answers,
  } = quizStore();

  let button;

  const onChooseAnswer = (choice: string) => {
    setAnswer(choice);
    sethasAnswered(true);
  };

  const onSubmitAnswer = () => {
    // call post request to backend, to submit answer and retrive result

    // setPassedResult(true);
    setPassedResult(false);
    submitQuiz();
  };

  const onClickNext = () => {
    sethasAnswered(false);
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
  return (
    <div className="rounded-[20px] bg-[#D9D9D9]">
      <div className="flex flex-col items-center gap-14">
        <p className="font-poppins text-[12px] font-bold text-black">
          {question}
        </p>
        <img src={image} className="h-[232px] w-[416px]" />
      </div>
      <div className="mt-[35px] grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        {Object.entries(options).map((value) => (
          <Option
            userAnswer={answers[index]}
            hasAnswered={hasAnswered}
            choice={value[0]}
            choiceValue={value[1]}
            key={value[1]}
            onClick={onChooseAnswer}
          />
        ))}
      </div>
      <div className="mt-[19px] flex items-center justify-end">{button}</div>
    </div>
  );
};

export default Question;
