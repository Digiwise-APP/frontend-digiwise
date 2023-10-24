export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = LoginData & {
  username: string;
  img_profile: string;
};

export type AuthResponse = {
  token: string;
};
