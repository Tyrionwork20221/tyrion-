import React from "react";
import logo2 from "../../assets/logo2.png";
import hamburger from "../../assets/hamburger.png";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className=" mx-9 flex items-center justify-between">
      <img src={logo2} alt="" className="md:w-32 md:h-14 w-16 h-7" />
      <div className="md:flex items-center text-white font-medium text-base  gap-14 hidden ">
        <h6
          className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]"
          onClick={() => navigate("/home")}
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
      <button className="bg-[#FBC108]  w-40 h-16 text-white rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00] hidden md:block">
        Dashboard
      </button>
      <div>
        {/* <button className="border-solid border-2 border-[#FBC108] mr-7  w-40 h-16 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white hidden">
          Sign in
        </button>
        <button className="bg-[#FBC108]  w-52 h-16 text-white rounded-lg font-medium text-lg px-4 cursor-pointer hover:bg-[#FFCC00] hidden">
          Create an account
        </button> */}
      </div>
      {/* hamburger for mobile view */}
      <img src={hamburger} alt="" className="md:hidden w-5 h-3" />
      {/* end */}
    </div>
  );
}

export default Navigation;
