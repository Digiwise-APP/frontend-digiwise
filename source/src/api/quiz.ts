import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config";

import { QuestionData, FormattedAnswer } from "../types/Quiz";

import getToken from "../utils/getToken";

type GetQuizResponse = {
  code: number;
  data: QuestionData[];
};

type SubmitQuizResponse = {
  data: {
    score: number;
  };
};

export const getQuizByLevel = async (
  level: number,
): Promise<GetQuizResponse> => {
  const token = getToken();
  const { data } = await axios.get<GetQuizResponse>(
    `${BASE_URL}/users/questions`,
    {
      params: {
        level: level,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    },
  );

  return data;
};

export const sentUserAnswer = async (
  userAnswer: FormattedAnswer,
): Promise<SubmitQuizResponse> => {
  const token = getToken();
  const { data } = await axios.post<
    FormattedAnswer,
    AxiosResponse<SubmitQuizResponse>
  >(`${BASE_URL}/users/answers`, userAnswer, {
    headers: {
      Authorization: token,
    },
  });

  return data;
};
