import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

const PrivateRoutes = (): JSX.Element => {
  const { token } = useAuth();

  let auth: { token: boolean } = { token: token ? true : false };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
