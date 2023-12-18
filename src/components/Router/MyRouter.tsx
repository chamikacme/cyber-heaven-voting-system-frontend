import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../homepage/Home";
import Login from "../login/Login";
import OtpPage from "../OtpPage/OtpPage";
import Main from "../Main/Main";
import ThanksPage from "../ThanksPage/ThanksPage";
import PrivateRoutes from "../../utils/privateRoutes";
import VotePage from "../VotingPage/VotePage";
import AuthRoutes from "../../utils/authRoutes";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRouter;
