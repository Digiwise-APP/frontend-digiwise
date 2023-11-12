import { userData } from "../types/User";

type UserDataLocalStorage = {
  state: userData;
};

const getToken = () => {
  const userToken = localStorage.getItem("user");
  if (!userToken) {
    return null;
  }

  const userStore = JSON.parse(userToken || "") as UserDataLocalStorage;
  return userStore.state.token;
};

export default getToken;
