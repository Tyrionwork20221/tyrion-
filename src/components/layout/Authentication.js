import React from "react";
import logo4 from "../../assets/logo4.svg";
// import SignUpPage from ".//SignUpPage";

function Authentication({ children }) {
  return (
    <div className="bg-[#FBC108] w-full h-full pt-14 md:pt-28 mb-4 md:mb-9 pb-12 md:pb-24">
      <img src={logo4} alt="" className="mx-auto w-24 md:w-52 h-10 md:h-20" />
      {children}
    </div>
  );
}

export default Authentication;
