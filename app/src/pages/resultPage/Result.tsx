import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { User, useAuth } from "../../Providers/AuthProvider";
import axiosClient from "../../AxiosClient/axiosClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type personResult = {
  count: string;
  candidateId: number;
  firstName: string;
  lastName: string;
};

const Result = () => {
  const { user, setUser, setToken } = useAuth();
  const navigate = useNavigate();

  const [resultData, setResultData] = useState<{
    maleResults: personResult[];
    femaleResults: personResult[];
  }>({
    maleResults: [],
    femaleResults: [],
  });

  useEffect(() => {
    if (user && user.isSuperAdmin) {
      axiosClient()
        .get("/votes")
        .then((response) => {
          setResultData(response.data);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            toast.error("Session expired");
            setUser({} as User);
            setToken("");
            navigate("/login");
          } else if (error.response.data) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong");
          }
        });
    }
  }, [user, resultData]);

  return (
    <>
      <main>
        <div className="shadow-lg bg-white/70 backdrop-blur-sm">
          <NavBar />
        </div>

        <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#14452F]">
          <div className="mt-5">
            {resultData.maleResults.length > 0 ? (
              <table className="text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Rank
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Votes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.maleResults.map((person, index) => (
                    <tr
                      key={person.candidateId}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">
                        {person.firstName} {person.lastName}
                      </td>
                      <td className="px-6 py-4">{person.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-white text-xl">No male data to display</h1>
            )}
          </div>
          <div className="mt-5">
            {resultData.femaleResults.length > 0 ? (
              <table className="text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Rank
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Votes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.femaleResults.map((person, index) => (
                    <tr
                      key={person.candidateId}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">
                        {person.firstName} {person.lastName}
                      </td>
                      <td className="px-6 py-4">{person.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-white text-xl">No female data to display</h1>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Result;
