import { useNavigate } from "react-router-dom";
import { User, useAuth } from "../../Providers/AuthProvider";
import Logo from "../../assets/sanmark white logo (1).png";
import { BiLogOut } from "react-icons/bi";

const NavBar = () => {
  const { user, setUser, setToken } = useAuth();

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    setUser({} as User);
    setToken("");
    navigate("/login");
  };
  return (
    <>
      <nav className="fixed top-0 z-20 w-full bg-gradient-to-l from-zinc-600 to-slate-900 start-0">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Sanmark Logo" />
          </a>
          {user.username ? (
            <div className="flex space-x-3 text-3xl md:order-2 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={Logout}
                className="text-[#78620A] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg  px-3 py-2 text-center inline-flex items-center me-2 font-semibold text-md"
              >
                <BiLogOut />
              </button>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
