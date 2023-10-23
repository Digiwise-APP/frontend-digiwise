type Question = {
  id: number;
  type: string;
  level: number;
  question: string;
  option: string[];
};

type Answers = string[] | [string[]];

type FinalData = {
  level: number;
  type: string;
  answers: Array<{
    question_id: number;
    answer: string | string[];
  }>;
};

const formatUserAnswer = (
  questions: Question[],
  answers: Answers,
): FinalData => {
  const data = {
    level: questions[0].level,
    type: questions[0].type,
    answers: [],
  };

  for (let i = 0; i < questions.length; i++) {
    data.answers.push({
      question_id: questions[i].id,
      answer: answers[i],
    });
  }

  return data;
};

export default formatUserAnswer;
