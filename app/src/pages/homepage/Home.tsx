import Img from "../../assets/99544502161.png";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <>
      <main>
        <div className="shadow-lg bg-white/70 backdrop-blur-sm">
          <NavBar />
        </div>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#14452F]">
          <img src={Img} alt="images" />
          <a
            type="submit"
            href="/login"
            className="px-5 py-2.5 text-1xl text-[#78620A] rounded-lg text-1xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700 bg-wh-500 hover:bg-orange-500/80 transition-200 font-semibold"
          >
            Login Now
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
