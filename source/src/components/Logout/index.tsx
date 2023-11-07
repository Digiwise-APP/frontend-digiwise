import React from "react";

import { Navigate } from "react-router-dom";
import userStore from "../../../store/userStore";

const Logout = () => {
  const { clearUser } = userStore();

  clearUser();
  return <Navigate to="/auth/signIn" replace={true} />;
};

export default Logout;
