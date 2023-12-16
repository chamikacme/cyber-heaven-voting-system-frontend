import axios from "axios";
const axiosClient = () => {
    return axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
};
export default axiosClient;