import React, { useEffect } from "react";

// store
import quizStore from "../../../../store/quizStore";
import modalStore from "../../../../store/modalStore";

// components
import Question from "./Question";
import QuizResult from "../../QuizResult";
import QuizPreparation from "../../QuizPreparation";

// data
import questions from "../../../../data/dummy/levelThree";
import text from "../../../../data/quizText";

const LevelThree = () => {
  const { closeModal } = modalStore();
  const { addQuiz, status, startQuiz, index, quiz, passed } = quizStore();

  const quizText = text[0].third_level;
  let resultText;

  if (passed) {
    resultText = quizText.success;
  } else {
    resultText = quizText.failed;
  }
  useEffect(() => {
    addQuiz(questions);
  }, []);

  if (status === "steady") {
    return (
      <QuizPreparation
        title={quizText.title}
        salutation={quizText.preparation.salutation}
        firstParagraph={quizText.preparation.first_paragraph}
        secondParagraph={quizText.preparation.second_paragraph}
      />
    );
  } else if (status === "start") {
    return (
      <Question
        question={quiz[index].question}
        options={quiz[index].options}
      />
    );
  } else if (status === "finished") {
    return (
      <QuizResult
        title={quizText.title}
        salutation={resultText.salutation}
        firstParagraph={resultText.first_paragraph}
      />
    );
  } else {
    return (
      <div className="flex justify-center items-center">
        <p className="font-poppins text-lg">something wrong</p>
      </div>
    );
  }
};

export default LevelThree;
