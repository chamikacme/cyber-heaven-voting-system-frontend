import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

const AuthRoutes = (): JSX.Element => {
  const { token } = useAuth();

  let auth: { token: boolean } = { token: token ? false : true };

  return auth.token ? <Outlet /> : <Navigate to="/main" />;
};

export default AuthRoutes;
