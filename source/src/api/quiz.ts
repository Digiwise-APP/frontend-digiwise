import axios from "axios";
import { BASE_URL } from "./config";

type Question = {
  id: number;
  type: string;
  level: number;
  question: string;
  option: string[];
  image?: string;
};

export const getQuizByLevel = async (level: number): Promise<Question[]> => {
  const { data } = await axios.get<Question[]>(
    `${BASE_URL}/api/v1/users/questions`,
    {
      headers: {
        level: level,
      },
    },
  );
  return data;
};
