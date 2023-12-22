import { useAuth } from "../../Providers/AuthProvider";
import NavBar from "../../components/navbar/NavBar";

const ThanksPage = () => {
  const { setToken, setUser } = useAuth();
  setTimeout(() => {
    localStorage.clear();
    setToken("");
    setUser({} as any);
  }, 5000);

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
            Thank you!
          </h1>
          <br />
          <p className="text-white">You'll be logged out!!!</p>
        </div>
      </main>
    </>
  );
};

export default ThanksPage;
