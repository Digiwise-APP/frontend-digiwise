import React from "react";

import QuizOnboarding from "../components/QuizOnboarding";
import Modal from "../components/Modal";

import QuizLevel from "../components/QuizLevel";

const QuizPage = () => {
  return (
    <>
      <div
        data-theme="light"
        className="flex min-h-screen items-center justify-center py-[54px]"
      >
        <QuizOnboarding />
      </div>
      <Modal>
        <QuizLevel />
      </Modal>
    </>
  );
};

export default QuizPage;
