import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../homepage/Home";
import Login from "../login/Login";
import OtpPage from "../OtpPage/OtpPage";
import Main from "../Main/Main";
import ThnaksPage from "../ThanksPage/ThnaksPage";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/thanks" element={<ThnaksPage />} />
      </Routes>
    </>
  );
};

export default MyRouter;
