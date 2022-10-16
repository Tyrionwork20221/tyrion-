import React from "react";
import time from "../assets/Vectorq.png";
import tyrion5 from "../assets/Tyrion 5.png";
import Navigation from "./Navigation";


function aboutUsPage() {
  return (
    <div className="font-DMSans overflow-x-hidden pt-12">
      {/* header */}
      <Navigation/>
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
