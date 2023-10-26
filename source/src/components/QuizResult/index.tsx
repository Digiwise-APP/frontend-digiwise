import React from "react";

import quizStore from "../../../store/quizStore";
import modalStore from "../../../store/modalStore";

type ResultProps = {
  title: string;
  salutation: string;
  firstParagraph: string;
  secondParagraph?: string;
};

const QuizResult: React.FC<ResultProps> = ({
  title,
  salutation,
  firstParagraph,
  secondParagraph,
}) => {
  const { restartQuiz } = quizStore();
  const { closeModal } = modalStore();

  const onCloseModal = () => {
    restartQuiz();
    closeModal();
  };
  return (
    <div className="rounded-[20px]  bg-[#D9D9D9]">
      <p className="text-center font-poppins text-[20px] font-bold text-black">
        {title}
      </p>
      <p className="mt-[20px] text-left font-poppins text-[12px] leading-[30px] text-black md:mt-[46px]">
        {salutation} <br></br>
        {firstParagraph}
        {secondParagraph && (
          <>
            <br />
            <br />
            {secondParagraph}
          </>
        )}
      </p>
      <div className="mt-[40px] flex items-center justify-between md:mt-[93px]">
        <button
          className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-white drop-shadow-xl"
          onClick={() => restartQuiz()}
        >
          <p className="font-inter text-black">Ulangi Quiz</p>
        </button>
        <button
          className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
          onClick={onCloseModal}
        >
          <p className="font-inter text-black">Tutup</p>
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
