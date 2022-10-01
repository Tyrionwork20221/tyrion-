import React from "react";
import logo3 from "../assets/logo3.png";
import time from "../assets/Vectorq.png";
import tyrion5 from "../assets/Tyrion 5.png";

function aboutUsPage() {
  return (
    <div>
      {/* header */}
      <div className="ml-20 flex items-center justify-between mt-12">
        <img src={logo3} alt="" className="w-32 h-14" />
        <div className="flex items-center  font-medium text-base  gap-14">
          <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
            Home
          </h6>
          <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
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
        <div>
          <button className="border-solid border-2 border-[#FBC108] mr-7  w-40 h-16 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white">
            Sign in
          </button>
          <button className="bg-[#FBC108]  w-52 h-16 text-white rounded-lg font-medium text-lg px-4 cursor-pointer hover:bg-[#FFCC00]">
            Create an account
          </button>
        </div>
      </div>

      {/* content */}
      <div className="flex ml-40 mt-28">
        <div>
          <h1 className="text-[#FBC108] font-bold text-6xl mb-2.5">About us</h1>
          <p className="text-xl mb-16">
            We are committed to offering reliable, cutting-edge exchange
            services to all our clients worldwide who trust us enough to work
            with us.
          </p>

          <img src={time} alt="" className="mb-6" />
          <p className="text-xl mb-16">
            We are a renowned trading exchange that started as far back as 2019.
            During its establishment, Tyrion exchange has grown a network of
            foreign and local clients dedicated to our growth and progress as an
            exchange.
          </p>
          <p className="text-xl mb-16">
            Having operational excellence has helped us as a brand build our
            worldwide network. Since we understand the unique advantages of the
            internet, we are taking our services forward by automating our
            payment process to improve our delivery time and provide instant
            payment for the values of your digital assets and gift cards.
          </p>
        </div>
        <img src={tyrion5} alt="" />
      </div>
    </div>
  );
}

export default aboutUsPage;
