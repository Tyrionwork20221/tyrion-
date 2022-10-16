import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

import hamburger from "../assets/hamburger.png";
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
  return (
    <div>
      <button className="border-solid border-2 border-[#FBC108] mr-7  w-40 h-16 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white">
        Sign in
      </button>
      <button className="bg-[#FBC108]  w-52 h-16 text-white rounded-lg font-medium text-lg px-4 cursor-pointer hover:bg-[#FFCC00] ">
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

  return (
    <div className=" mx-9 flex items-center justify-between">
      <img src={logo} alt="" className="md:w-32 md:h-14 w-16 h-7m" />
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
        <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
          Rates
        </h6>
        <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
          FAQs
        </h6>
        <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
          Contact
        </h6>
      </div>
      {location.pathname === "/" ? <HomeHeader /> : <OthersHeader />}

      {/* hamburger for mobile view */}
      <img src={hamburger} alt="" className="md:hidden w-5 h-3" />
      {/* end */}
    </div>
  );
}

export default Navigation;
