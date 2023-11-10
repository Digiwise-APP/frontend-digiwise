import axios, { AxiosResponse } from "axios";
import { FAKE_NEWS_URL } from "./config";

export interface FakeNewsResponse {
  validity: boolean;
  articles: Article[];
}

export interface Article {
  domain_url: string;
  url: string;
  title: string;
}

export interface FakeNewsRequest {
  input_type: string;
  input_text: string;
}
export const predictFakeNews = async (
  input_type: string,
  input_text: string,
) => {
  const { data } = await axios.post<
    FakeNewsRequest,
    AxiosResponse<FakeNewsResponse>
  >(`${FAKE_NEWS_URL}/detect-fake-news`, {
    input_text: input_text,
    input_type: input_type,
  });

  return data;
};
