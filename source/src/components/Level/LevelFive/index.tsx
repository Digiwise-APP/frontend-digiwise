import { useEffect, useState } from "react";

// store
import quizStore from "../../../../store/quizStore";
import modalStore from "../../../../store/modalStore";

// components
import Question from "./Question";
import QuizPreparation from "../../QuizPreparation";
import QuizResult from "../../QuizResult";
import Loading from "../../Loading";

// data
import questions from "../../../../data/dummy/levelOne";
import text from "../../../../data/quizText";

// api function
import { getQuizByLevel } from "../../../api/quiz";

const LevelFive = () => {
  const { addQuiz, status, index, quiz, passed, setStatus } = quizStore();
  const { level } = modalStore();

  const quizText = text[0].fifth_level;
  let resultText;

  if (passed) {
    resultText = quizText.success;
  } else {
    resultText = quizText.failed;
  }

  const getQuizData = async () => {
    setStatus("loading");
    const data = await getQuizByLevel(level);
    console.log(data);
    addQuiz(data);
    setStatus("steady");
  };
  useEffect(() => {
    getQuizData();
  }, []);

  if (status === "loading") {
    return <Loading />;
  } else if (status === "steady") {
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
        url_image={quiz[index].url_image}
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

export default LevelFive;
