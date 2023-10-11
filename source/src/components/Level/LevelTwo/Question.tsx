import React from 'react'

import quizStore from '../../../../store/quizStore'

type QuestionProps =  {
    question: string
    imageOptionOne: string,
    imageOptionTwo : string

}


const Question: React.FC<QuestionProps> = ({question, imageOptionOne, imageOptionTwo}) => {
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

  return (
    <div className="bg-[#D9D9D9] px-[55px] py-[53px] rounded-[20px]">
      <div className="flex flex-col items-center gap-14">
        <p className="text-[20px] font-poppins font-bold text-black">
          {question}
        </p>
        <div className='flex gap-[40px]'>
          <div className={`p-2 cursor-pointer ${answers[index] === 'a' ? 'bg-red-400 rounded-xl' : ''} `} onClick={() => setAnswer('a')}>
            <img src={imageOptionOne} className="w-[359px] h-[400px]" />
          </div>
          <div className={`p-2 cursor-pointer  ${answers[index] === 'b' ? 'bg-red-400 rounded-xl' : ''} `} onClick={() => setAnswer('b')}>
            <img src={imageOptionTwo} className="w-[359px] h-[400px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-[19px]">{button}</div>
    </div>
  )
}

export default Question