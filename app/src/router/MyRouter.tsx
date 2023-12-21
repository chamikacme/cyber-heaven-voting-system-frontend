import { Route, Routes } from "react-router-dom";

import Home from "../pages/homepage/Home";
import Login from "../pages/login-page/Login";
import Main from "../pages/main-page/Main";
import ThanksPage from "../pages/thanks-page/ThanksPage";
import VotePage from "../pages/voting-page/VotePage";
import AuthRoutes from "../utils/authRoutes";
import PrivateRoutes from "../utils/privateRoutes";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/main" element={<Main />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRouter;
