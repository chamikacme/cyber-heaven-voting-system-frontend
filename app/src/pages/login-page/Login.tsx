import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../AxiosClient/axiosClient";
import { useAuth } from "../../Providers/AuthProvider";
import NavBar from "../../components/navbar/NavBar";

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>({
    email: "",
    password: "",
  });

  const notify = () => toast.success("successful");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.persist();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const { setToken, setUser } = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };
    await axiosClient()
      .post("/auth/signin", data)
      .then((res) => {
        // setEmail(email);
        // toast.success(res.data.message);
        setToken(res.data.token);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/main");
      })
      .catch((error) => {
        // error(error);
      });
  }

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
                Sign In
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Sanmark email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@thesanmark.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your one time password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your one time password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={notify}
                  className="w-full text-white bg-orange-600 hover:bg-orange-500/80  focus:ring-4 focus:outline-none focus:ring-primary-300 font-mediumrounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-full"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
