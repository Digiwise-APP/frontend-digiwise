import React from "react";

import Quiz from "../components/Quiz";
import Modal from "../components/Modal";

import Level from "../components/Level";

const QuizPage = () => {
  return (
    <>
      <div
        data-theme="light"
        className="flex h-full items-center justify-center py-[54px]"
      >
        <Quiz />
      </div>
      <Modal>
        <Level />
      </Modal>
    </>
  );
};

export default QuizPage;
