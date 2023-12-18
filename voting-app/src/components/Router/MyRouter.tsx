import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../homepage/Home";
import Login from "../login/Login";
import OtpPage from "../OtpPage/OtpPage";
import Main from "../Main/Main";
import ThnaksPage from "../ThanksPage/ThnaksPage";
import PrivateRoutes from "../../utils/privateRoutes";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/otp" element={<OtpPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/thanks" element={<ThnaksPage />} />
      </Routes>
    </>
  );
};

export default MyRouter;
