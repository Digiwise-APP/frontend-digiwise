import { useEffect } from "react";

import { AxiosError } from "axios";

import { useNavigate } from "react-router-dom";

// store
import modalStore from "../../../store/modalStore";
import quizStore from "../../../store/quizStore";
import userStore from "../../../store/userStore";

// components
import Loading from "../Loading";
import Question from "../Question";
import QuizPreparation from "../QuizPreparation";
import QuizResult from "../QuizResult";
import ServerError from "../ServerError";

// data
import text from "../../../data/quizText";

// api function
import { getQuizByLevel } from "../../api/quiz";

import getToken from "../../utils/getToken";

const QuizLevel = () => {
  const { addQuiz, status, index, quiz, passed, setStatus } = quizStore();
  const { level, closeModal } = modalStore();
  const { clearUser } = userStore();

  const navigate = useNavigate();

  const quizText = text[level - 1].text;
  let resultText;

  if (passed) {
    resultText = quizText.success;
  } else {
    resultText = quizText.failed;
  }

  const getQuizData = async () => {
    const token = getToken();
    console.log(token);
    if (token === "" || !token) {
      closeModal();
      navigate("/auth", {
        replace: true,
      });
      return;
    }
    try {
      setStatus("loading");
      const response = await getQuizByLevel(level);

      // console.log(data);
      addQuiz(response.data);
      setStatus("steady");
    } catch (e) {
      const err = e as AxiosError;
      console.log(err);
      if (err.response?.status === 401) {
        clearUser();
        closeModal();
        navigate("/auth", {
          replace: true,
        });
        return;
      }
      setStatus("error");
    }
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
    return <ServerError />;
  }
};

export default QuizLevel;
