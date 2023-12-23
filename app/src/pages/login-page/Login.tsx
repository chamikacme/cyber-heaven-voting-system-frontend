import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../AxiosClient/axiosClient";
import { useAuth } from "../../Providers/AuthProvider";
import NavBar from "../../components/navbar/NavBar";

interface FormData {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.persist();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const { setToken, setUser } = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      username: formData.username,
      password: formData.password,
    };
    await axiosClient()
      .post("/auth/signin", data)
      .then((res) => {
        toast.success("success", {
          className: "toast-message",
        });
        setToken(res.data.token);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/main");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message, {
            className: "toastMessage",
            position: "top-right",
          });
          if (error.response.data.statusCode) {
            localStorage.removeItem("token");
          }
        } else {
          toast.error("Something went wrong. Try again!", {
            className: "toastMessage",
            position: "top-right",
          });
        }
      });
  }

  return (
    <>
      <div>
        <div className="shadow-lg bg-white/70 backdrop-blur-sm">
          <NavBar />
        </div>
        <div className="flex-col items-center justify-center w-full px-6 py-8 mx-auto flex md:h-screen lg:py-0 h-[100vh] bg-[#14452F]">
          <div className="w-full bg-gray-800 border-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex flex-col items-center justify-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Sign In
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Emter your username"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your one time password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className=" text-[#78620A] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center text-1xl flex flex-col justify-center items-center"
                >
                  Log in
                </button>
                <ToastContainer position="bottom-right" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
