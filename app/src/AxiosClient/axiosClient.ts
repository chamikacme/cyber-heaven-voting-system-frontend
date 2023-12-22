import axios from "axios";
const axiosClient = () => {
  return axios.create({
    baseURL: "https://api-eve.sanmark.dev",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export default axiosClient;
