export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = LoginData & {
  username: string;
  img_profile?: string;
};

export type AuthResponse = {
  code: number;
  data: {
    token: string;
    level: number;
    username: string;
  };
};

export type userData = {
  username?: string;
  email: string;
  token: string;
  level: number;
};

export interface UserMedal {
  code: number;
  message: string;
  data: UserDataMedal[];
}

interface UserDataMedal {
  _id: string;
  level: number;
  medal: string;
  description: string;
}
