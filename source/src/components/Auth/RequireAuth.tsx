import { Navigate, Outlet, useLocation } from "react-router-dom";
import getToken from "../../utils/getToken";
import { getUserMedal } from "../../api/user";
import { useEffect } from "react";
import userStore from "../../../store/userStore";

const RequireAuth = () => {
  const token = getToken();
  const location = useLocation();
  const { clearUser } = userStore();

  if (token === "" || !token || token === null) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  // Digunain kalo invalid token
  getUserMedal().catch(() => {
    clearUser();
    return <Navigate to="/auth" state={{ from: location }} />;
  });

  return <Outlet />;
};

export default RequireAuth;
