import React from "react";
import logo3 from "../assets/logo3.png";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

function RatesPage() {
  const navigate = useNavigate();

  // const location = useLocation();
  return (
    <div className="font-DMSans overflow-x-hidden pt-12">
      {/* header */}
      <Navigation />

      {/* body */}
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-6xl mt-20 mb-1">Rates calculator</h1>
        <p className="font-medium text-2xl text-[#00000069] mb-16">
          Get the current value for your transaction
        </p>
        <div className="w-981 h-400 bg-[#fbc108] py-24 px-32 rounded-lg mb-11">
          <form>
            <select className="w-717 h-16 px-6 rounded-lg">
              <option value="giftcard" className="text-[#3E3B3B] text-xl">
                Select giftcard
              </option>
            </select>
            <select className="w-717 h-16 px-6 rounded-lg mt-7">
              <option value="category" className="text-[#3E3B3B] text-xl">
                Select card category
              </option>
            </select>
            <select className="w-717 h-16 px-6 rounded-lg mt-7">
              <option value="amount" className="text-[#3E3B3B] text-xl">
                Amount in USD
              </option>
            </select>
          </form>
        </div>
        {/* conversion */}
        <h1 className="font-bold text-6xl">= N 23,500</h1>
        <h4 className="font-medium text-2xl mb-16 text-[#00000069]">
          based on current rate
        </h4>
        <h1 className="font-bold text-5xl mb-8">To get started</h1>
        <div className="flex md:gap-12 gap-6 md:mb-40 mb-20">
          <button
            className="md:w-280 w-52  rounded-lg md:h-14 h-8 bg-[#FBC108] text-white font-medium md:text-xl hover:bg-[#FFCC00] active:bg-blue-200 "
            onClick={() => navigate("/sign-up")}
          >
            Create an account
          </button>
          <button
            className="border border-yellow-500 border-2px md:w-52 w-24 h-8 md:h-14 rounded-lg md:text-xl font-medium  hover:bg-[#fbc108] hover:text-white hover:border-none active:bg-blue-200"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatesPage;
