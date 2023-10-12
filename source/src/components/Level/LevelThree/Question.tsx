import React from 'react'

import quizStore from '../../../../store/quizStore'
import Option from './Option'

type Option = {
  [key: string]: string;
}

type QuestionProps =  {
    question: string
    options: Option[]
}


const Question: React.FC<QuestionProps> = ({question, options}) => {
  const {
    nextQuestion,
    quiz,
    index,
    setPassedResult,
    submitQuiz,
    setAnswer,
    answers,
  } = quizStore();

  let button;

  const onChooseAnswer = (choice: string) => {
    setAnswer(choice);
   
  };

  const onSubmitAnswer = () => {
    // call post request to backend, to submit answer and retrive result

    // setPassedResult(true);
    setPassedResult(false);
    submitQuiz();
  };

  const onClickNext = () => {
    nextQuestion();
  };

  if (index === quiz.length - 1) {
    button = (
      <button
        className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
        onClick={onSubmitAnswer}
      >
        <p className="font-inter text-black">Selesai</p>
      </button>
    );
  } else {
    button = (
      <button
        className="bg-[#C0EEF2] drop-shadow-xl flex justify-center items-center rounded-full w-[150px] h-[40px]"
        onClick={onClickNext}
      >
        <p className="font-inter text-black">Selanjutnya</p>
      </button>
    );
  }

  const questionOptions = (
      options.map((option) => (
        <Option optionText={option.text} />
      ))
    
  )

  return (
    <div className="bg-[#D9D9D9] px-[55px] py-[53px] rounded-[20px]">
      <div className="flex flex-col items-center gap-14">
        <p className="text-[20px] font-poppins font-bold text-black text-center">
          {question}
        </p>
        <div className='flex flex-col gap-[18px] items-center'>
          {questionOptions}
        </div>
      </div>
      <div className="flex justify-end items-center mt-[19px]">{button}</div>
    </div>
  )
}

export default Question