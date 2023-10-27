import { create } from "zustand";
import { persist } from "zustand/middleware";

import { userData } from "../src/types/User";

type Store = {
  username?: string | null | undefined;
  email: string;
  token: string;
  userLevel: number;
  isLoggedIn: boolean;
  storeUser: (userData: userData) => void;
  logout: () => void;
};

const userStore = create<Store>()(
  persist(
    (set, get) => ({
      username: null,
      email: "",
      token: "",
      userLevel: 0,
      isLoggedIn: false,
      storeUser: (userData) => {
        set({
          username: userData.username,
          email: userData.email,
          token: userData.token,
          userLevel: userData.level,
          isLoggedIn: true,
        });
      },
      logout() {
        set({
          username: null,
          email: "",
          token: "",
          isLoggedIn: false,
        });
      },
    }),
    {
      name: "user",
    },
  ),
);

export default userStore;
