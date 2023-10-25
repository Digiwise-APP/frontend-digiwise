export type QuestionData = {
  id: string;
  question: string;
  level: number;
  question_type: string;
  option_answer: string;
  url_image?: string;
};

export type FormattedAnswer = {
  level: number;
  type: string;
  answers: Array<{
    question_id: number;
    answer: string | string[];
  }>;
};
