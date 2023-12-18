import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Nav/NavBar";

const Home = (handleLoginPopup: any) => {
  return (
    <>
      <main>
        <div className="shadow-lg bg-white/70 backdrop-blur-sm">
          <NavBar />
        </div>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#14452F]">
          <h1
            className="md:w-[550px] text-center text-6xl p-8 sm:p-2 sm:text-6xl md:text-8xl font-bold select-none mix-blend-exclusion text-white font-dancing
          "
          >
            Cyber Heaven
            <br />
            2023
          </h1>
          <p className="mix-blend-exclusion text-white md:w-[550px] text-center tracking-widest">
            Voting Now....
          </p>

          <Link
            type="submit"
            to="/login"
            className="px-5 py-1 text-white bg-orange-600 rounded-full bg-wh-500 tes te mt-7 hover:bg-orange-500/80 transition-200"
          >
            Login Now
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
