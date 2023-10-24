import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config";

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = LoginProps & {
  username: string;
  img_profile: string;
};

type AuthResponse = {
  token: string;
};

export const signIn = async (loginData: LoginProps): Promise<string> => {
  const { data } = await axios.post<LoginProps, AxiosResponse<AuthResponse>>(
    `${BASE_URL}/users/register`,
    loginData,
  );

  const { token } = data;

  return token;
};

export const signUp = async (registerData: RegisterProps): Promise<string> => {
  const { data } = await axios.post<RegisterProps, AxiosResponse<AuthResponse>>(
    `${BASE_URL}/users/register`,
    registerData,
  );

  const { token } = data;

  return token;
};
