import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config";

import { LoginData, RegisterData, AuthResponse } from "../types/User";

export const signIn = async (loginData: LoginData): Promise<string> => {
  const { data } = await axios.post<LoginData, AxiosResponse<AuthResponse>>(
    `${BASE_URL}/users/register`,
    loginData,
  );

  const { token } = data;

  return token;
};

export const signUp = async (registerData: RegisterData): Promise<string> => {
  const { data } = await axios.post<RegisterData, AxiosResponse<AuthResponse>>(
    `${BASE_URL}/users/register`,
    registerData,
  );

  const { token } = data;

  return token;
};
