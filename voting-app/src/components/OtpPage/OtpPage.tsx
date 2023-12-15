import React, { useState } from "react";
import OtpInput from "react-otp-input";
import NavBar from "../Nav/NavBar";
import Logo from "../../assets/email (1).png";
// import OTPInput, { ResendOTP } from "otp-input-react";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div>
        <div className="shadow-lg bg-white/70 backdrop-blur-sm">
          <NavBar />
        </div>
        <div className="flex-col items-center justify-center w-full px-6 py-8 mx-auto flex md:h-screen lg:py-0 h-[100vh] bg-[#14452F]">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex flex-col items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Please enter the OTP
              </h1>
              <div className="flex flex-col items-center justify-center mt-5">
                <img src={Logo} width={50} height={50} />
              </div>
              <div className="flex justify-center p-6 mt-2 space-y-4 md:space-y-6 sm:p-8">
                <div>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle="p-1 w-3 m-1 text-white text-3xl rounded-lg bg-orange-500/80 "
                    inputType="number"
                    renderSeparator={<span>-</span>}
                    shouldAutoFocus
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
