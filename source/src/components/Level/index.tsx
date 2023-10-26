import { useEffect } from "react";

// store
import modalStore from "../../../store/modalStore";
import quizStore from "../../../store/quizStore";

// components
import Loading from "../Loading";
import Question from "../Question";
import QuizPreparation from "../QuizPreparation";
import QuizResult from "../QuizResult";

// data
import text from "../../../data/quizText";

// api function
import { getQuizByLevel } from "../../api/quiz";

const Level = () => {
  const { addQuiz, status, index, quiz, passed, setStatus } = quizStore();
  const { level } = modalStore();

  const quizText = text[level - 1].text;
  let resultText;

  if (passed) {
    resultText = quizText.success;
  } else {
    resultText = quizText.failed;
  }

  const getQuizData = async () => {
    setStatus("loading");
    const response = await getQuizByLevel(level);
    if (response.code === 401) {
      setStatus("error");
      return;
    }
    // console.log(data);
    addQuiz(response.data);
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
        level={level}
      />
    );
  } else if (status === "finished") {
    return (
      <QuizResult
        title={quizText.title}
        salutation={resultText.salutation}
        firstParagraph={resultText.first_paragraph}
        secondParagraph={resultText.second_paragraph}
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

export default Level;
