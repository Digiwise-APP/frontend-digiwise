import { useEffect } from "react";

// store
import quizStore from "../../../../store/quizStore";

// components
import QuizPreparation from "../../QuizPreparation";
import QuizResult from "../../QuizResult";
import Question from "./Question";

// data
import questions from "../../../../data/dummy/levelThree";
import text from "../../../../data/quizText";

const LevelThree = () => {
  const { addQuiz, status, index, quiz, passed } = quizStore();

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
        option_answer={quiz[index].option_answer}
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
      <div className="flex items-center justify-center">
        <p className="font-poppins text-lg">something wrong</p>
      </div>
    );
  }
};

export default LevelThree;
