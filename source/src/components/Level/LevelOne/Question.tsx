import React, { useState } from 'react';
import AnswerOption from '../../AnswerOption';

import quizStore from '../../../../store/quizStore';

interface Option {
  [key: string]: string;
}

export type Question = {
  question: string;
  image: string;
  options: Option;
};

const Question: React.FC<Question> = ({ image, question, options }) => {
  const [hasAnswered, sethasAnswered] = useState<boolean>(false);
  const { nextQuestion, quiz, index, setResult, submitQuiz, setAnswer, answers } = quizStore();

  let button;

  const onChooseAnswer = (choice: string) => {
    setAnswer(choice);
    sethasAnswered(true);
  };

  const onSubmitAnswer = () => {
    setResult(true);
    submitQuiz();
  };

  const onClickNext = () => {
    sethasAnswered(false);
    nextQuestion();
  };

  if (index === quiz.length - 1) {
    button = (
      <button className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]" onClick={onSubmitAnswer}>
        <p className="font-inter text-black">Selesai</p>
      </button>
    );
  } else {
    button = (
      <button className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]" onClick={onClickNext}>
        <p className="font-inter text-black">Selanjutnya</p>
      </button>
    );
  }
  return (
    <div className="bg-[#D9D9D9] px-[55px] py-[53px] rounded-[20px]">
      <div className="flex flex-col items-center gap-14">
        <p className="text-[12px] font-poppins font-bold text-black">{question}</p>
        <img src={image} className="w-[416px] h-[232px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-[35px]">
        {Object.entries(options).map((value) => (
          <AnswerOption userAnswer={answers[index]} hasAnswered={hasAnswered} choice={value[0]} choiceValue={value[1]} key={value[1]} onClick={onChooseAnswer} />
        ))}
      </div>
      <div className="flex justify-end items-center mt-[19px]">{button}</div>
    </div>
  );
};

export default Question;
