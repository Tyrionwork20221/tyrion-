import React from "react";

function NavBar() {
  return (
    <div>
      <div className="md:ml-90 justify-between md:mt-20 mt-6 md:flex ml-9">
        <div>
          <h1 className="font-bold md:text-7xl text-5xl md:mt-20 mt-6 text-white ">
            Swap Your <br />
            Gift Cards & <br />
            Digital Assets{" "}
          </h1>
          <h4 className="text-white mt-2 font-medium text-sm md:text-2xl md:mb-90 mb-5">
            For Naira Securely In Lesser Time
          </h4>
          <div className="flex gap-4 mb-10">
            <button className="bg-[#FBC108] md:w-44 w-28 md:h-16 h-9 px-2.5 py-2 text-sm  text-white rounded-lg nd:font-medium md:text-lg cursor-pointer hover:bg-[#FFCC00]">
              Start Trading
            </button>
            <button className="border-solid border-2 border-red-500  md:w-44 w-28 md:h-16 h-9 px-2.5 py-2 text-sm  text-white rounded-lg md:font-medium md:text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white hover:border-none">
              Check Rates
            </button>
          </div>
        </div>
        <img src={tyrion3} alt="" className="relative z-10" />
      </div>
    </div>
  );
}
