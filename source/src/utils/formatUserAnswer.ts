import { QuestionData, FormattedAnswer } from "../types/Quiz";

type Answers = string[] | [string[]];

const formatUserAnswer = (
  questions: QuestionData[],
  answers: Answers,
): FormattedAnswer => {
  const data: FormattedAnswer = {
    level: questions[0].level,
    question_type: questions[0].question_type,
    answers: [],
  };

  for (let i = 0; i < questions.length; i++) {
    data.answers.push({
      question_id: questions[i]._id,
      user_answer: answers[i],
    });
  }

  return data;
};

export default formatUserAnswer;
