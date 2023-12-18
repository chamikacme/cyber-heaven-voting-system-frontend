import { useState } from "react";
import { data } from "./data";
import { IoSearchOutline } from "react-icons/io5";

function VotePage() {
  const [selected, setSelected] = useState<number[]>();
  const [query, setQuery] = useState("");
  return (
    <div>
      <div className="bg-[#14452F] flex flex-col items-center min-h-screen">
        <div className="w-full max-w-md p-4 shadow sm:p-6 ">
          <h5 className="flex flex-col items-center justify-center mb-3 text-base font-semibold text-white md:text-xl">
            Voting King of the Sanmark
          </h5>

          <div className="max-w-md mx-auto">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-400">
                <IoSearchOutline />
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
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
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-black bg-opacity-50">
                    <div className="text-white text-md font-bold">
                      {data.find((i) => i.id === item)?.firstName}
                    </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full shadow-lg w-4 h-4 flex items-center justify-center"
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
                } else if (
                  (item.firstName + " " + item.lastName)
                    .toLowerCase()
                    .includes(query.toLowerCase())
                ) {
                  return item;
                }
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
                        ? "bg-green-400"
                        : selected && selected.length >= 3
                        ? "bg-gray-400"
                        : "bg-gray-50"
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
                    <div className="p-2 w-full">
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
                          className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
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
        {(selected && selected.length ===3) ? (
          <div className="fixed bottom-0 bg-[#14452F] flex w-full justify-center py-4">
            <div className="max-w-md w-full px-6">
              <button
                className="inline-flex items-center px-4 py-3 text-lg justify-center font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                disabled={!selected || selected!.length < 3}
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
