import React, { ReactNode, createContext, useEffect, useState } from "react";
import axiosClient from "../AxiosClient/axiosClient";
import { toast } from "react-toastify";

export interface User {
  id: number;
  username: string;
  isMaleVoteCasted: boolean;
  isFemaleVoteCasted: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

interface AuthContextProps {
  token: string;
  setToken: (data: string) => void;
  user: User;
  setUser: (data: User) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: { children: ReactNode }) {
  const [token, _setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const setToken = (data: string) => {
    localStorage.setItem("token", data);
    _setToken(data);
  };

  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    if (token) {
      axiosClient()
        .get("/auth/validate-user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            toast.error("Session expired");
            setUser({} as User);
            setToken("");
          } else if (error.response.data) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong");
          }
        });
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;
