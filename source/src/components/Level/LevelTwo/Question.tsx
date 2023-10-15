import React from "react";

import quizStore from "../../../../store/quizStore";

type QuestionProps = {
  question: string;
  imageOptionOne: string;
  imageOptionTwo: string;
};

const Question: React.FC<QuestionProps> = ({
  question,
  imageOptionOne,
  imageOptionTwo,
}) => {
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
  };

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

  return (
    <div className="rounded-[20px] bg-[#D9D9D9]">
      <div className="flex flex-col items-center gap-14">
        <p className="font-poppins text-[20px] font-bold text-black">
          {question}
        </p>
        <div className="flex gap-[40px]">
          <div
            className={`cursor-pointer p-2 ${
              answers[index] === "a" ? "rounded-xl bg-red-400" : ""
            } `}
            onClick={() => setAnswer("a")}
          >
            <img
              src={imageOptionOne}
              className="h-[200px] w-[178px] md:h-[400px] md:w-[359px]"
            />
          </div>
          <div
            className={`cursor-pointer p-2  ${
              answers[index] === "b" ? "rounded-xl bg-red-400" : ""
            } `}
            onClick={() => setAnswer("b")}
          >
            <img
              src={imageOptionTwo}
              className="h-[200px] w-[178px] md:h-[400px] md:w-[359px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[19px] flex items-center justify-end">{button}</div>
    </div>
  );
};

export default Question;
