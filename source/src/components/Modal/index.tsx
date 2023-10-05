import React from "react";

import modalStore from "../../../store/modalStore";
import quizStore from "../../../store/quizStore";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Modal: React.FC<Props> = ({ children }) => {
  const { closeModal } = modalStore();
  const { restartQuiz } = quizStore();

  const onCloseModal = () => {
    closeModal();
    restartQuiz();
  };
  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>

      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="bg-[#D9D9D9] max-w-[1000px] rounded-[20px]">
          <div className="flex justify-end">
            <button
              className="w-[30px] h-[30px] flex items-center justify-center m-[17px] bg-white rounded-full drop-shadow-xl"
              onClick={onCloseModal}
            >
              <span className="font-bold text-black">X</span>
            </button>
          </div>
          {/* content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
