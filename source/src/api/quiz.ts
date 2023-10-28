import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config";

import { QuestionData, FormattedAnswer } from "../types/quiz";
import {  userData } from "../types/User";



type GetQuizResponse = {
  code: number;
  data: QuestionData[];
};

type SubmitQuizResponse = {
  score: number;
};

type UserDataLocalStorage = {
  state: userData
}

const userStore = JSON.parse(localStorage.getItem('user') || '') as UserDataLocalStorage
const token = userStore.state.token



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
        Authorization: token,
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
      Authorization: token,
    },
  });

  const { score } = data;

  return score;
};
