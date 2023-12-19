import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../AxiosClient/axiosClient";
import { useAuth } from "../../Providers/AuthProvider";
import NavBar from "../../components/navbar/NavBar";

const Main = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function getMaleCandidates() {
    return await axiosClient()
      .get("/users/candidates/male")
      .then((res) => {
        navigate("/vote", { state: { data: res.data, gender: "Male" } });
      });
  }

  async function getFemaleCandidates() {
    await axiosClient()
      .get("/users/candidates/female")
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
            className="md:w-[550px] text-center text-6xl p-8 sm:p-2 sm:text-6xl md:text-8xl font-bold select-none mix-blend-exclusion text-white font-dancing
          "
          >
            Vote Now...
          </h1>

          <div className="mt-5">
            <button
              type="submit"
              className="text-white bg-orange-600 hover:bg-orange-500/100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-3.5 text-center inline-flex items-center me-2 "
              disabled={user.isFemaleVoteCasted}
              onClick={() => {
                if (user.isFemaleVoteCasted) {
                  alert("You have already voted for Queen");
                } else {
                  getFemaleCandidates();
                }
              }}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="w-3.5 h-3.5 me-2"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="#F4900C"
                  d="M14.174 17.075L6.75 7.594l-3.722 9.481z"
                ></path>
                <path
                  fill="#F4900C"
                  d="M17.938 5.534l-6.563 12.389H24.5z"
                ></path>
                <path
                  fill="#F4900C"
                  d="M21.826 17.075l7.424-9.481l3.722 9.481z"
                ></path>
                <path
                  fill="#FFCC4D"
                  d="M28.669 15.19L23.887 3.523l-5.88 11.668l-.007.003l-.007-.004l-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z"
                ></path>
                <circle fill="#5C913B" cx="17.957" cy="22" r="3.688"></circle>
                <circle fill="#981CEB" cx="26.463" cy="22" r="2.412"></circle>
                <circle fill="#DD2E44" cx="32.852" cy="22" r="1.986"></circle>
                <circle fill="#981CEB" cx="9.45" cy="22" r="2.412"></circle>
                <circle fill="#DD2E44" cx="3.061" cy="22" r="1.986"></circle>
                <path
                  fill="#FFAC33"
                  d="M33 34H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2zm0-3.486H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2z"
                ></path>
                <circle fill="#FFCC4D" cx="1.447" cy="8.042" r="1.407"></circle>
                <circle fill="#F4900C" cx="6.75" cy="7.594" r="1.192"></circle>
                <circle
                  fill="#FFCC4D"
                  cx="12.113"
                  cy="3.523"
                  r="1.784"
                ></circle>
                <circle
                  fill="#FFCC4D"
                  cx="34.553"
                  cy="8.042"
                  r="1.407"
                ></circle>
                <circle fill="#F4900C" cx="29.25" cy="7.594" r="1.192"></circle>
                <circle
                  fill="#FFCC4D"
                  cx="23.887"
                  cy="3.523"
                  r="1.784"
                ></circle>
                <circle
                  fill="#F4900C"
                  cx="17.938"
                  cy="5.534"
                  r="1.784"
                ></circle>
              </svg>
              Queen
            </button>
            <button
              type="submit"
              className="text-white bg-orange-600 hover:bg-orange-500/100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-3.5 text-center inline-flex items-center me-2 "
              disabled={user.isMaleVoteCasted}
              onClick={() => {
                if (user.isMaleVoteCasted) {
                  alert("You have already voted for King");
                } else {
                  getMaleCandidates();
                }
              }}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="w-3.5 h-3.5 me-2"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M52.9 42.9C51.4 32.4 42.6 24.4 32 24.4c-10.6 0-19.4 8-20.9 18.4h41.8z"
                  fill="#428bc1"
                ></path>

                <path
                  d="M61.8 22.9c-.4-1.8-1.5-3.2-3.1-4.1c-.7-.4-1.5-.6-2.3-.7c-.7-.1-1.4 0-2.1.2c-1.2.3-2.4.9-3.5 1.4c-1.5.7-2.9 1.4-4.2 1.4v4.6c2.3 0 4.4-1 6.2-1.9c1.9-.9 3.1-1.5 3.8-1.1c.5.3.8.7.9 1.2c.1.6.1 1.4-.1 2.3c-.2 1-.7 2.1-1.3 3.4c-1.2 2.5-2.8 4.9-4 6.7c-.4.7-.8 1.3-1.1 1.7l-.3.6c0 .1-.1.1-.1.2h-37c0-.1-.1-.1-.1-.2l-.3-.6c-.3-.5-.7-1.1-1.1-1.7c-1.2-1.8-2.8-4.2-4-6.7c-.6-1.3-1-2.4-1.3-3.4c-.2-1-.3-1.8-.1-2.3c.1-.5.4-.9.9-1.2c.7-.4 1.9.1 3.8 1.1c1.8.9 3.8 1.9 6.2 1.9v-4.6c-1.3 0-2.7-.7-4.2-1.4c-1.1-.6-2.3-1.1-3.5-1.4c-.9-.2-1.6-.3-2.3-.2c-.8.1-1.6.3-2.3.7c-1.6.9-2.7 2.4-3.1 4.1c-.5 2.3 0 5.2 1.8 8.8c1.3 2.7 3 5.3 4.3 7.2c.4.6.8 1.2 1 1.6c.1.2.2.4.4.6c.6.9 1 1.6 1.2 2.4v11.3c-.3 0-.5.2-.5.6c0 .3.2.6.5.6h42.3c.3 0 .5-.2.5-.6c0-.3-.2-.6-.5-.6V43.6c.3-.8.7-1.5 1.2-2.4c.1-.2.2-.4.4-.6c.2-.4.6-1 1-1.6c1.2-1.9 2.9-4.5 4.3-7.2c1.7-3.6 2.2-6.5 1.7-8.9"
                  fill="#f2b200"
                ></path>

                <path
                  d="M32.9 27.2c.5 1.6-2 4-5.6 5.2c-3.6 1.3-7 1-7.6-.6c-.5-1.6 2-4 5.6-5.2s7-1 7.6.6"
                  fill="#42ade2"
                ></path>

                <path fill="#ffdd7d" d="M29.6 44.6h4.8v10.8h-4.8z"></path>

                <path fill="#ffce31" d="M37.8 44.6h4.8v10.8h-4.8z"></path>

                <path fill="#ffffff" d="M34.4 44.6h3.4v10.8h-3.4z"></path>

                <path fill="#ffce31" d="M46 44.6h3.4v10.8H46z"></path>

                <path fill="#f2b200" d="M10.8 44.6h3.4v10.8h-3.4z"></path>

                <path fill="#ffce31" d="M14.6 44.6h6.6v10.8h-6.6z"></path>

                <g fill="#f2b200">
                  <path d="M28.4 34.9c0 1.5-2.7 5.3-2.7 5.3S23 36.4 23 34.9s1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7"></path>

                  <path d="M40.9 34.9c0 1.5-2.7 5.3-2.7 5.3s-2.7-3.8-2.7-5.3s1.2-2.7 2.7-2.7c1.5 0 2.7 1.2 2.7 2.7"></path>
                </g>

                <path fill="#66caf2" d="M38.3 12.6H25.7l3-4.7h6.4z"></path>

                <g fill="#ffce31">
                  <path d="M12.1 32.8c2.4-2.3 7.2-3.5 10.4-2.6c-2.5 2.3-7.2 3.5-10.4 2.6"></path>

                  <path d="M52.1 32.8c-3.2.9-8-.3-10.4-2.6c3.2-.9 8 .3 10.4 2.6"></path>

                  <path d="M26.6 30.1c2.9-1.7 7.8-1.7 10.7 0c-2.9 1.7-7.7 1.7-10.7 0"></path>
                </g>

                <path fill="#428bc1" d="M33 7.9l1.1 4.7h4.2l-3.2-4.7z"></path>

                <path fill="#42ade2" d="M33 7.9h-2.2l-.9 4.7h4.2z"></path>

                <path fill="#66caf2" d="M30.8 7.9l-.9 4.7h-4.2l3-4.7z"></path>

                <path
                  d="M11.5 41.7c6.8-.5 13.7-.6 20.5-.6c6.8 0 13.7.1 20.5.6c-6.8.5-13.7.6-20.5.6c-6.8-.1-13.7-.1-20.5-.6"
                  fill="#ffdd7d"
                ></path>

                <g fill="#428bc1">
                  <path d="M10.8 44.6h42.3v1.1H10.8z"></path>

                  <ellipse cx="10.8" cy="45.1" rx=".5" ry=".6"></ellipse>

                  <ellipse cx="53.2" cy="45.1" rx=".5" ry=".6"></ellipse>
                </g>

                <path
                  d="M50.7 20.4c-.3-1.1-.7-2.1-1.4-3c-.7-.9-1.5-1.7-2.6-2.3c-.8-.4-1.6-.7-2.5-.8c-.7-.1-1.5 0-2.3.2c-1.3.3-2.6 1-3.9 1.6c-.3.2-.7.3-1.1.5c.8-1.6 1.3-3.1 1.3-4.1H25.7c0 1 .5 2.5 1.3 4.1c-.4-.2-.7-.3-1.1-.5c-1.3-.6-2.6-1.3-3.9-1.6c-.8-.2-1.6-.3-2.3-.2c-.9.1-1.7.3-2.5.8c-1 .6-1.9 1.4-2.6 2.3c-.6.9-1.1 1.9-1.4 3c-.7 2.9-.3 6.6 1.3 10.9c1.2 3.4 2.8 6.2 3.5 7.6h5.3c-.2-.4-.5-.8-.7-1.2c-.1-.2-.3-.4-.4-.6c-2.1-3.4-5.7-11.1-4.6-15.5c.3-1.1.8-1.9 1.8-2.4c.3-.2.7-.3 1.6-.1c.9.2 1.9.7 3 1.3c1.7.9 3.6 1.8 5.7 2.1V39h4.5V22.5c2.1-.3 4-1.2 5.8-2.1c1.1-.5 2.1-1.1 3-1.3c.9-.2 1.3-.1 1.6.1c.9.5 1.5 1.3 1.8 2.4c1.1 4.4-2.5 12-4.6 15.5c-.1.2-.3.4-.4.6c-.3.4-.5.8-.7 1.2H46c.8-1.3 2.3-4.2 3.5-7.6c1.5-4.3 1.9-8 1.2-10.9"
                  fill="#ffce31"
                ></path>

                <path
                  d="M32 17.1c-1.7 0-3.2-.7-4.4-1.7c.3 2.2 2.1 3.9 4.4 3.9c2.2 0 4.1-1.7 4.4-3.9c-1.2 1.1-2.7 1.7-4.4 1.7"
                  fill="#f2b200"
                ></path>
              </svg>
              King
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
