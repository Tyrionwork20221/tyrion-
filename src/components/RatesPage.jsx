import React from "react";
import logo3 from "../assets/logo3.png";

function ratesPage() {
  return (
    <div>
      {/* header */}
      <div className="ml-20 mr-10 flex items-center justify-between mt-12">
        <img src={logo3} alt="" className="w-32 h-14" />
        <div className="flex items-center  font-medium text-base  gap-14">
          <h6>Home</h6>
          <h6>About us</h6>
          <h6>Rates</h6>
          <h6>FAQs</h6>
          <h6>Contact</h6>
        </div>
        <div>
          <button className="border-solid border-2 border-[#FBC108] mr-7  w-40 h-16 rounded-lg font-medium text-lg">
            Sign in
          </button>
          <button className="bg-[#FBC108]  w-52 h-16 text-white rounded-lg font-medium text-lg px-4">
            Create an account
          </button>
        </div>
      </div>

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
        <h4 className="font-medium text-2xl  text-[#00000069]">
          based on current rate
        </h4>
      </div>
    </div>
  );
}

export default ratesPage;
