import { Navigate, Outlet, useLocation } from "react-router-dom";
import getToken from "../../utils/getToken";

const RequireAuth = () => {
  const token = getToken();
  const location = useLocation();

  if (token === "" || !token || token === null) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
