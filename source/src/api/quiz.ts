import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config";

import { QuestionData, FormattedAnswer } from "../types/quiz";

type GetQuizResponse = {
  code: number;
  data: QuestionData[];
};

type SubmitQuizResponse = {
  score: number;
};

const TEMP_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUyOTA1M2IzMjIzODJiM2VhMDEwNWYxIiwiZW1haWwiOiJjb250b2hAZ21haWwuY29tIiwidXNlcm5hbWUiOiJuaXNhIiwiaWF0IjoxNjk4MzM2MzA3LCJleHAiOjE2OTgzMzk5MDd9.km2j_bjQI89-nXxoAf3eN_3fL0dMkTo37i_qUs_w3Ug";

export const getQuizByLevel = async (
  level: number,
): Promise<GetQuizResponse> => {
  const { data } = await axios.get<GetQuizResponse>(
    `${BASE_URL}/users/questions`,
    {
      params: {
        level: level,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: TEMP_TOKEN,
      },
    },
  );

  return data;
};

export const sentUserAnswer = async (
  userAnswer: FormattedAnswer,
): Promise<number> => {
  const { data } = await axios.post<
    FormattedAnswer,
    AxiosResponse<SubmitQuizResponse>
  >(`${BASE_URL}/users/answers`, userAnswer, {
    headers: {
      Authorization: TEMP_TOKEN,
    },
  });

  const { score } = data;

  return score;
};
