import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo5 from "../assets/logo5.svg";
import x from "../assets/x.svg";
import hamburger from "../assets/hamburger.png";
import hamburger1 from "../assets/hamburger1.svg";
import { useNavigate, useLocation } from "react-router-dom";

export function HomeHeader() {
  return (
    <div>
      <button className="bg-[#FBC108]  w-40 h-16 text-white rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00] hidden md:block">
        Dashboard
      </button>
    </div>
  );
}

export function OthersHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="hidden md:block">
      <button
        className="border-solid border-2 border-[#FBC108] mr-7  w-40 h-16 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white"
        onClick={() => navigate("/sign-in")}
      >
        Sign in
      </button>
      <button
        className="bg-[#FBC108]  w-52 h-16 text-white rounded-lg font-medium text-lg px-4 cursor-pointer hover:bg-[#FFCC00] "
        onClick={() => navigate("/sign-up")}
      >
        Create an account
      </button>
    </div>
  );
}

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);
  let colorText;
  let logo;

  location.pathname === "/"
    ? (colorText = "text-white")
    : (colorText = "text-black");
  location.pathname === "/" ? (logo = logo2) : (logo = logo3);

  function hambugerClick() {}

  return (
    <div className=" mx-9 flex items-center justify-between">
      <img
        src={logo}
        alt=""
        className="md:w-32 md:h-14 w-16 h-7 hidden md:block"
      />
      <div
        className={`md:flex items-center ${colorText} font-medium text-base  gap-14 hidden`}
      >
        <h6
          className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/")}
        >
          Home
        </h6>
        <h6
          className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] "
          onClick={() => navigate("/about")}
        >
          About us
        </h6>
        <h6
          className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/rates")}
        >
          Rates
        </h6>
        <h6
          className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("faqs/")}
        >
          FAQs
        </h6>
        <h6
          className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/contact")}
        >
          Contact
        </h6>
      </div>
      {location.pathname === "/" ? <HomeHeader /> : <OthersHeader />}

      {/* hamburger for mobile view */}
      <img src={hamburger} alt="" className="hidden w-5 h-3" />
      <img src={hamburger1} alt="" className="hidden w-5 h-3" />
      <div className="w-345 h-auto pt-8 pl-8 pr-6 pb-4 bg-white rounded-lg md:hidden">
        <div className="flex justify-between mb-11">
          <img src={logo5} alt="" />
          <img src={x} alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h6
            className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/")}
          >
            Home
          </h6>
          <h6
            className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] "
            onClick={() => navigate("/about")}
          >
            About us
          </h6>
          <h6
            className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/rates")}
          >
            Rates
          </h6>
          <h6
            className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("faqs/")}
          >
            FAQs
          </h6>
          <h6
            className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
            onClick={() => navigate("/contact")}
          >
            Contact
          </h6>
          <button className="bg-[#FBC108]  w-24 h-8 text-white rounded-lg font-medium text-sm hover:bg-[#FFCC00]">
            Dashboard
          </button>
        </div>
      </div>

      {/* end */}
    </div>
  );
}

export default Navigation;
