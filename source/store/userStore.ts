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
  increaseLevel: () => void;
  clearUser: () => void;
};

const userStore = create<Store>()(
  persist(
    (set) => ({
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
      increaseLevel: () => {
        set((state) => ({
          userLevel: state.userLevel + 1,
        }));
      },
      clearUser() {
        set({
          username: null,
          email: "",
          token: "",
          isLoggedIn: false,
          userLevel: 0,
        });
      },
    }),
    {
      name: "user",
    },
  ),
);

export default userStore;
