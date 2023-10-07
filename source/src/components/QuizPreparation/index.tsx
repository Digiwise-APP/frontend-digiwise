import React from "react";

import quizStore from "../../../store/quizStore";
import modalStore from "../../../store/modalStore";

type ResultProps = {
  title: string;
  salutation: string;
  firstParagraph: string;
  secondParagraph?: string;
};

const QuizPreparation: React.FC<ResultProps> = ({
  title,
  salutation,
  firstParagraph,
  secondParagraph,
}) => {
  const { startQuiz } = quizStore();
  const { closeModal } = modalStore();

  return (
    <div className="bg-[#D9D9D9] px-[99px] py-[96px] rounded-[20px]">
      <p className="text-[20px] font-poppins font-bold text-black text-center">
        {title}
      </p>
      <p className="font-poppins text-[12px] leading-[30px] text-black mt-[46px]">
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
      <div className="flex justify-between items-center mt-[93px]">
        <button
          className="bg-white drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
          onClick={() => closeModal()}
        >
          <p className="font-inter text-black">Kembali</p>
        </button>
        <button
          className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
          onClick={() => startQuiz()}
        >
          <p className="font-inter text-black">Mulai</p>
        </button>
      </div>
    </div>
  );
};

export default QuizPreparation;
