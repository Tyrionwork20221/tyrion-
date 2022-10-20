import React from "react";
import logo3 from "../assets/logo3.png";
import collection from "../assets/Rectangle 2.png";

function shopNowPage() {
  return (
    <div className="font-DMSans">
      {/* header */}
      <div className="ml-40 mr-10 flex items-center  mt-12 mb-36">
        <img src={logo3} alt="" className="w-32 h-14 mr-16" />
        <div className="flex items-center  font-medium text-base  gap-20">
          <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Home
          </h6>
          <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Cart
          </h6>
          <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Connect wallet
          </h6>
        </div>
      </div>

      {/* body */}
      <h1 className="font-bold text-7xl ml-40 mb-40">
        Want to rep a<br />
        <span className="text-[#FBC108]">reputable</span> brand?
      </h1>
      <img src={collection} alt="" />
    </div>
  );
}

export default shopNowPage;
