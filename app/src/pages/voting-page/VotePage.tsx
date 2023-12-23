import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";
import axiosClient from "../../AxiosClient/axiosClient";
import { useAuth } from "../../Providers/AuthProvider";

function VotePage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { user, setUser } = useAuth();

  type Candidate = {
    id: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
  };

  var data: Candidate[] = [];

  if (state) {
    data = state?.data;
  }

  const [selected, setSelected] = useState<number[]>();
  const [query, setQuery] = useState("");

  async function castVote() {
    await axiosClient()
      .post("/votes", {
        userId: user.id,
        voteType: state?.gender,
        candidateId: selected,
      })
      .then((res) => {
        if (state.gender === "Male") {
          setUser({
            ...user,
            isMaleVoteCasted: true,
          });
        } else if (state.gender === "Female") {
          setUser({
            ...user,
            isFemaleVoteCasted: true,
          });
        }
        navigate("/main");
      });
  }

  useEffect(() => {
    if (!state) {
      navigate("/main");
    }
  }, [state, navigate]);

  return (
    <div>
      <div className="bg-[#14452F] flex flex-col items-center min-h-screen">
        <div className="w-full max-w-md p-4 shadow sm:p-6 ">
          <h5 className="flex flex-col items-center justify-center mb-3 text-base font-semibold text-white md:text-xl">
            Vote for the {state.gender === "Male" ? "King" : "Queen"}
          </h5>

          <div className="max-w-md mx-auto">
            <div className="relative flex items-center w-full h-12 overflow-hidden bg-white rounded-lg focus-within:shadow-lg">
              <div className="grid w-12 h-full text-gray-400 place-items-center">
                <IoSearchOutline />
              </div>

              <input
                className="w-full h-full pr-2 text-sm text-gray-700 outline-none peer"
                type="text"
                id="search"
                placeholder="Search.."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
          </div>

          {selected && selected.length > 0 && (
            <div className="flex flex-wrap justify-center mt-4 space-x-4">
              {selected.map((item) => (
                <div key={item} className="relative">
                  <img
                    src={data.find((i) => i.id === item)?.imageUrl}
                    alt="..."
                    className="w-24 h-24 rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-full">
                    <div className="font-bold text-white text-md">
                      {data.find((i) => i.id === item)?.firstName}
                    </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 mt-2 mr-2 bg-white rounded-full shadow-lg"
                    onClick={() =>
                      setSelected(selected.filter((id) => id !== item))
                    }
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          <ul className="my-4 space-y-3">
            {data
              .filter((item) => {
                if (query === "") {
                  return item;
                }
                if (
                  (item.firstName + " " + item.lastName)
                    .toLowerCase()
                    .includes(query.toLowerCase())
                ) {
                  return item;
                }
                return null;
              })
              .map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    if (selected?.includes(item.id)) {
                      setSelected(selected.filter((id) => id !== item.id));
                    } else {
                      if (selected?.length! >= 3) {
                        return;
                      }
                      setSelected([...(selected || []), item.id]);
                    }
                  }}
                >
                  <div
                    className={`flex items-center p-5 text-base font-bold text-gray-900 rounded-lg ${
                      selected && selected.includes(item.id)
                        ? "bg-gradient-to-r from-red-700 via-yellow-600 to-yellow-500"
                        : selected && selected.length >= 3
                        ? "bg-gray-400"
                        : "bg-gradient-to-r from-rose-200 to-teal-100"
                    } group hover:shadow dark:text-white`}
                  >
                    <div className="flex flex-wrap justify-center">
                      <img
                        src={item.imageUrl}
                        alt="..."
                        className={`w-32 shadow-lg rounded-full max-w-full h-auto align-middle border-none ${
                          selected &&
                          selected.length >= 3 &&
                          !selected.includes(item.id)
                            ? "filter brightness-50"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="w-full p-2">
                      <div
                        className={`flex-1 ms-3 whitespace-nowrap text-center p-2 ${
                          selected &&
                          selected.length >= 3 &&
                          !selected.includes(item.id)
                            ? "text-gray-500"
                            : "text-gray-900"
                        }`}
                      >
                        {item.firstName} {item.lastName}
                      </div>
                      <div className="text-center">
                        <button
                          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#78620A] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700 rounded-lg  ${
                            selected &&
                            selected.length >= 3 &&
                            !selected.includes(item.id)
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={
                            selected &&
                            selected.length >= 3 &&
                            !selected.includes(item.id)
                          }
                        >
                          {selected && selected.includes(item.id)
                            ? "Unselect"
                            : "Select"}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {selected && selected.length === 3 ? (
          <div className="fixed bottom-0 bg-[#14452F] flex w-full justify-center py-4">
            <div className="w-full max-w-md px-6">
              <button
                className="inline-flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-center text-[#78620A] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700 rounded-lg"
                disabled={!selected || selected!.length < 3}
                onClick={castVote}
              >
                Vote
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default VotePage;
