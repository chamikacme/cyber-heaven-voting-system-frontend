import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

const SuperAdminRoutes = (): JSX.Element => {
  const { token, user } = useAuth();

  let auth: { token: boolean } = {
    token: token && user.isSuperAdmin ? true : false,
  };

  return auth.token ? <Outlet /> : <Navigate to="/main" />;
};

export default SuperAdminRoutes;
