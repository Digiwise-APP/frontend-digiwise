import React from "react";

import quizStore from "../../../../store/quizStore";
import formatOptionResponse from "../../../utils/formatOptionResponse";

type QuestionProps = {
  question: string;
  option_answer: string;
};

const Question: React.FC<QuestionProps> = ({ question, option_answer }) => {
  const {
    nextQuestion,
    quiz,
    index,
    setPassedResult,
    submitQuiz,
    setAnswer,
    answers,
  } = quizStore();

  const onSubmitAnswer = () => {
    // call post request to backend, to submit answer and retrive result

    // setPassedResult(true);
    setPassedResult(false);
    submitQuiz();
  };

  const onClickNext = () => {
    nextQuestion();
  };

  // format answer
  const [firstOption, secondOption] = formatOptionResponse(option_answer);

  let optionContent;

  if (firstOption === "BENAR") {
    optionContent = (
      <div className="flex gap-[40px]">
        <div
          className={`flex h-[200px] w-[178px] cursor-pointer items-center justify-center rounded-[20px] p-2 md:h-[400px] md:w-[359px] ${
            answers[index] === firstOption ? "bg-[#4B4D88BF]" : "bg-[#2C9F4D]"
          }`}
          onClick={() => setAnswer(firstOption)}
        >
          <p className="font-poppins text-[40px] font-bold text-[##D9D9D9] text-[#D9D9D9]">
            {firstOption}
          </p>
        </div>
        <div
          className={`flex h-[200px] w-[178px] cursor-pointer items-center justify-center rounded-[20px] p-2 md:h-[400px] md:w-[359px] ${
            answers[index] === secondOption ? "bg-[#4B4D88BF]" : "bg-[#D45A5A]"
          }`}
          onClick={() => setAnswer(secondOption)}
        >
          <p className="font-poppins text-[40px] font-bold text-[##D9D9D9] text-[#D9D9D9]">
            {secondOption}
          </p>
        </div>
      </div>
    );
  } else {
    optionContent = (
      <div className="flex gap-[40px]">
        <div
          className={`cursor-pointer p-2 ${
            answers[index] === firstOption ? "rounded-xl bg-red-400" : ""
          } `}
          onClick={() => setAnswer(firstOption)}
        >
          <img
            src={firstOption}
            className="h-[200px] w-[178px] md:h-[400px] md:w-[359px]"
          />
        </div>
        <div
          className={`cursor-pointer p-2  ${
            answers[index] === secondOption ? "rounded-xl bg-red-400" : ""
          } `}
          onClick={() => setAnswer(secondOption)}
        >
          <img
            src={secondOption}
            className="h-[200px] w-[178px] md:h-[400px] md:w-[359px]"
          />
        </div>
      </div>
    );
  }

  let button;

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
      <div className="flex flex-col items-center gap-8 md:gap-14">
        <p className="font-poppins text-[12px] font-bold text-black md:text-[20px]">
          {question}
        </p>
        {optionContent}
      </div>
      <div className="mt-[19px] flex items-center justify-end">{button}</div>
    </div>
  );
};

export default Question;
