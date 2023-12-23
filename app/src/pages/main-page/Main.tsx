import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../AxiosClient/axiosClient";
import { useAuth } from "../../Providers/AuthProvider";
import NavBar from "../../components/navbar/NavBar";
import King from "../../assets/king.png";
import Queen from "../../assets/Queen.png";

const Main = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function getMaleCandidates() {
    return await axiosClient()
      .get("/candidates/male")
      .then((res) => {
        navigate("/vote", { state: { data: res.data, gender: "Male" } });
      });
  }

  async function getFemaleCandidates() {
    await axiosClient()
      .get("/candidates/female")
      .then((res) => {
        navigate("/vote", { state: { data: res.data, gender: "Female" } });
      });
  }

  useEffect(() => {
    if (user.isFemaleVoteCasted && user.isMaleVoteCasted) {
      navigate("/thanks");
    }
  }, [user, navigate]);

  return (
    <>
      <main>
        <div className="shadow-lg bg-white/70 backdrop-blur-sm">
          <NavBar />
        </div>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#14452F]">
          <h1
            className="md:w-[550px] text-center text-4xl p-8 sm:p-2 sm:text-6xl md:text-8xl font-bold select-none mix-blend-exclusion text-white font-dancing
          "
          >
            Vote Now
          </h1>

          <div className="mt-5">
            <button
              type="submit"
              className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-3.5 text-center inline-flex items-center me-2 "
              disabled={user.isFemaleVoteCasted}
              onClick={() => {
                if (user.isFemaleVoteCasted) {
                  alert("You have already voted for Queen");
                } else {
                  getFemaleCandidates();
                }
              }}
            >
              <img src={Queen} width={120} alt="queen" />
            </button>
            <button
              type="submit"
              className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-3.5 text-center inline-flex items-center me-2 "
              disabled={user.isMaleVoteCasted}
              onClick={() => {
                if (user.isMaleVoteCasted) {
                  alert("You have already voted for King");
                } else {
                  getMaleCandidates();
                }
              }}
            >
              <img src={King} width={120} alt="king" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
