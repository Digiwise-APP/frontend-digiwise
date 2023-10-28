import { Navigate, Outlet, useLocation } from "react-router-dom";
import userStore from "../../../store/userStore";

const RequireAuth = () => {
  const { token } = userStore();
  const location = useLocation();

  if (token === "" || !token || token === null) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
