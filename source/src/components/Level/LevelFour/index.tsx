import React, { useEffect } from "react";

// store
import quizStore from "../../../../store/quizStore";

// components
import Question from "./Question";
import QuizResult from "../../QuizResult";
import QuizPreparation from "../../QuizPreparation";

// data
import questions from "../../../../data/dummy/levelFour";
import text from "../../../../data/quizText";

const LevelFour = () => {
  const { addQuiz, status, index, quiz, passed } = quizStore();

  const quizText = text[0].fourth_level;
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
      <Question question={quiz[index].question} options={quiz[index].options} />
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
      <div className="flex items-center justify-center">
        <p className="font-poppins text-lg">something wrong</p>
      </div>
    );
  }
};

export default LevelFour;
