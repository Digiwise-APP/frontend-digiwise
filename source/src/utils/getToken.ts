import { userData } from "../types/User";

type UserDataLocalStorage = {
  state: userData;
};

const getToken = () => {
  const userStore = JSON.parse(
    localStorage.getItem("user") || "",
  ) as UserDataLocalStorage;
  return userStore.state.token;
};

export default getToken;
