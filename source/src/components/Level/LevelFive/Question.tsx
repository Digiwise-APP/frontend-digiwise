import React from "react";

import quizStore from "../../../../store/quizStore";
import formatOptionResponse from "../../../utils/formatOptionResponse";

// options
import {
  OptionTypeFour,
  OptionTypeOne,
  OptionTypeThree,
  OptionTypeTwo,
} from "./Options";

type QuestionProps = {
  question: string;
  option_answer: string;
  url_image?: string;
};

const Question: React.FC<QuestionProps> = ({
  question,
  option_answer,
  url_image,
}) => {
  const { nextQuestion, quiz, index, setPassedResult, submitQuiz } =
    quizStore();

  const onSubmitAnswer = () => {
    // call post request to backend, to submit answer and retrive result

    // setPassedResult(true);
    setPassedResult(false);
    submitQuiz();
  };

  const onClickNext = () => {
    nextQuestion();
  };

  // format answer
  const options = formatOptionResponse(option_answer);

  let optionContent;
  // render different options based on option_answer props
  if (question.includes("Kamu menerima email yang mengklaim bahwa")) {
    optionContent = <OptionTypeOne url_image={url_image} options={options} />;
  } else if (question.includes("Mengonsumsi dua gelas air")) {
    optionContent = <OptionTypeTwo options={options} />;
  } else if (
    question.includes(
      "apakah kamu dapat mengidentifikasi tanda-tanda manipulasi",
    )
  ) {
    optionContent = <OptionTypeOne url_image={url_image} options={options} />;
  } else if (
    question.includes(
      "Penelitian terbaru menunjukkan bahwa minum setidaknya satu",
    )
  ) {
    optionContent = <OptionTypeThree options={options} />;
  } else {
    optionContent = <OptionTypeFour options={options} />;
  }

  let button;

  if (index === quiz.length - 1) {
    button = (
      <button
        className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
        onClick={onSubmitAnswer}
      >
        <p className="font-inter text-black">Selesai</p>
      </button>
    );
  } else {
    button = (
      <button
        className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
        onClick={onClickNext}
      >
        <p className="font-inter text-black">Selanjutnya</p>
      </button>
    );
  }

  return (
    <div className="rounded-[20px] bg-[#D9D9D9]">
      <div className="flex flex-col items-center gap-8 md:gap-14">
        <p className="font-poppins text-[12px] font-bold text-black md:text-[20px]">
          {question}
        </p>
        {optionContent}
      </div>
      <div className="mt-[19px] flex items-center justify-end">{button}</div>
    </div>
  );
};

export default Question;
