import React from "react";
import logo2 from "../assets/logo2.png";
import tyrion3 from "../assets/Tyrion 3.png";

function landingPage() {
  return (
    <div>
      <div className="bg-[#707070] pt-12">
        {/* header */}
        <div className="mx-90 flex items-center  justify-between">
          <img src={logo2} alt="" className="w-32 h-14" />
          <div className="flex items-center text-white font-medium text-base  gap-14">
            <h6>Home</h6>
            <h6>About us</h6>
            <h6>Rates</h6>
            <h6>FAQs</h6>
            <h6>Contact</h6>
          </div>
          <button className="bg-[#FBC108]  w-40 h-16 text-white rounded-lg font-medium text-lg">
            Dashboard
          </button>
        </div>

        {/* hero */}

        <div className="ml-90 flex justify-between mt-20 ">
          <div>
            <h1 className="font-bold text-7xl mt-20 text-white">
              Swap Your <br />
              Gift Cards & <br />
              Digital Assets{" "}
            </h1>
            <h4 className="text-white mt-2 font-medium text-2xl mb-90">
              For Naira Securely In Lesser Time
            </h4>
            <div className="flex gap-4">
              <button className="bg-[#FBC108] w-44 h-16  text-white rounded-lg font-medium text-lg">
                Start Trading
              </button>
              <button className="border-solid border-2 border-red-500  w-44 h-16  text-white rounded-lg font-medium text-lg">
                Check Rates
              </button>
            </div>
          </div>
          <img src={tyrion3} alt="" />
        </div>

        {/* section 2 */}
      </div>
    </div>
  );
}

export default landingPage;
