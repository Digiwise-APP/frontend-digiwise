export type QuestionData = {
  _id: string;
  question: string;
  level: number;
  question_type: string;
  option_answer: string;
  url_image?: string;
};

export type FormattedAnswer = {
  level: number;
  question_type: string;
  answers: Array<{
    question_id: string;
    user_answer: string | string[];
  }>;
};
