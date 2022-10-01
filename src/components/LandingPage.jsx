import React from "react";
import logo2 from "../assets/logo2.png";
import tyrion3 from "../assets/Tyrion 3a.png";
import tyrion4 from "../assets/Tyrion 4.png";
import coins1 from "../assets/Coins 1.png";
import reliable from "../assets/Reliable.png";
import security from "../assets/Security.png";
import fast from "../assets/Fast.png";
import radio from "../assets/Frame 46.png";
import radio2 from "../assets/Frame 46a.png";
import image2 from "../assets/Group 2.png";
import ellipse from "../assets/Ellipse 3.png";
import polygon from "../assets/Polygon 1.png";
import vector1 from "../assets/Vector 1.png";

function landingPage() {
  return (
    <div>
      {/* section 1 */}
      <div className="bg-gradient-to-br from-orange-400 to-gray-300 pt-12">
        {/* header */}
        <div className="mx-90 flex items-center  justify-between">
          <img src={logo2} alt="" className="w-32 h-14" />
          <div className="flex items-center text-white font-medium text-base  gap-14">
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
          <button className="bg-[#FBC108]  w-40 h-16 text-white rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00]">
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
              <button className="bg-[#FBC108] w-44 h-16  text-white rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00]">
                Start Trading
              </button>
              <button className="border-solid border-2 border-red-500  w-44 h-16  text-white rounded-lg font-medium text-lg cursor-pointer hover:bg-[#fbc108] hover:text-white hover:border-none">
                Check Rates
              </button>
            </div>
          </div>
          <img src={tyrion3} alt="" className="relative z-10" />
        </div>
        <img src={coins1} alt="" className="absolute top-530 left-890 z-0" />
        <img src={ellipse} alt="" className="absolute top-80 left-1380 z-0" />
        <img src={polygon} alt="" className="absolute top-700 left-580 z-0" />
        <img src={vector1} alt="" className="absolute top-410 left-56 z-0" />
      </div>

      {/* section 2 */}
      <div className="flex justify-center gap-36 mx-4 mt-20">
        <div className="flex flex-col items-center">
          <img src={security} alt="" className="w-24 mb-6 " />
          <h3 className="font-medium text-center text-2xl mb-6">Secure</h3>
          <p className="font-base text-[#00000066] text-center">
            Tyrion is an insured exchange
            <br /> platform that helps you protect
            <br /> your information and earnings.{" "}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={reliable} alt="" className="w-24 mb-8" />
          <h3 className="font-medium text-center text-2xl mb-6">Reliable</h3>
          <p className="font-base text-[#00000066] text-center">
            Tyrion offers a user-friendly interface
            <br /> & also provide round-the-clock
            <br /> customer service and support.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={fast} alt="" className="w-24 mb-6" />
          <h3 className="font-medium text-center text-2xl mb-6">Swift</h3>
          <p className="font-base text-[#00000066] text-center">
            {" "}
            With an automated payment service, we
            <br /> provide instant funding for the value of
            <br /> your digital currencies and gift cards.
          </p>
        </div>
      </div>

      {/* subsection */}
      <h1 className="font-bold text-center mt-20 text-6xl">
        Trust is our only
        <br />
        <span className="text-[#FBC108]">currency</span>
      </h1>
      <p className="mt-9 text-center text-3xl">
        We are 3 years experienced Nigerian registered and established
        <br /> exchange that provides local currency for an equal value of gift
        cards
        <br /> and digital assets with a network of foreign and local clientele.{" "}
      </p>
      <h1 className="mt-24 font-bold text-center text-6xl">
        Trade in 5 simple steps
      </h1>
      <img src={vector1} alt="" className="relative left-580 -top-2 z-0" />

      <div className="flex gap-32 ml-36 mt-44">
        <div>
          <div className="flex items-center gap-12">
            <img src={radio} alt="" className="self-start" />
            <div>
              <h1 className="font-lg font-bold text-3xl">
                Create/Verify your account
              </h1>
              <p className="mt-8 text-2xl text-[#00000063]">
                We are known for our unique expertise in gift card exchange to
                naira. We have been in existence since 2017 trading gift cards
                and cryptocurrencies offering amazing services to customers in
                Nigeria and beyond.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start" />
            <div>
              <h1 className="font-lg font-bold text-3xl">Link your bank</h1>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start" />
            <div>
              <h1 className="font-lg font-bold text-3xl">Check for rates</h1>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start" />
            <div>
              <h1 className="font-lg font-bold text-3xl">Place your trade</h1>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start" />
            <div>
              <h1 className="font-lg font-bold text-3xl">Get alert</h1>
            </div>
          </div>
        </div>
        <img src={tyrion4} alt="" />
      </div>
      <button className="flex items-center pl-10 bg-[#FBC108] mx-auto w-44 h-16  text-white rounded-lg font-medium text-lg">
        Trade now
      </button>

      {/* section 3 */}
      <div className="mt-32 mb-60 ">
        <video controls className="w-944 h-455 bg-[#FFFBEE] ml-64">
          <source src="" />
        </video>
      </div>

      {/* section 4 */}
      <div className="relative mb-16">
        <img src={image2} alt="" />
        <div className="flex flex-col absolute top-28 left-600">
          <h1 className="font-bold text-6xl">
            Want to rep a<br />
            <span className="text-[#FBC108]">reputable</span> brand?
          </h1>
          <p className="mt-6 text-xl font-bold mb-14">
            Our Tyrion branded merches are available for
            <br /> sale at affordable prices.
          </p>
          <button className="w-44 h-16 bg-black rounded-lg text-white">
            Shop now
          </button>
        </div>
      </div>

      {/* section 5 */}
      <div className="mx-52">
        <h1 className="font-bold text-4xl mb-3.5">
          Subscribe to our newsletter
        </h1>
        <p className="text-base font-medium">
          Want to stay ahead of crypto news and our exciting
          <br /> new updates?
        </p>
        <form className="flex gap-9 mt-7 mb-16 ">
          <input
            type="text"
            placeholder="Name"
            className="border border-2px border-gray-300 rounded-lg w-410 h-16 pl-3"
          />

          <input
            type="email"
            placeholder="Email address"
            className="border border-2px border-gray-300 rounded-lg w-410 h-16 pl-3"
          />

          <button
            type="submit"
            className="w-44 h-16 bg-[#FBC108] rounded-lg text-white"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* footer */}

      <footer className="bg-black text-white pt-32 pb-12 flex flex-col">
        <div className="flex gap-32 pl-40 ">
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Business</h4>
            <h6 className="font-base">About us</h6>
            <h6 className="font-base">Exchange</h6>
            <h6 className="font-base">Rates</h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Legal</h4>
            <h6 className="font-base">Term of use</h6>
            <h6 className="font-base">Privacy policy</h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Product</h4>
            <h6 className="font-base">Exchange</h6>
            <h6 className="font-base">Cryptocurrency</h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Support</h4>
            <h6 className="font-base">Live chat</h6>
            <h6 className="font-base">Help center</h6>
            <h6 className="font-base">Give feedback</h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Contact</h4>
            <h6 className="font-base">+234 905 678 4456</h6>
            <h6 className="font-base">hello@tyrionexchange</h6>
            <h6 className="font-base">Tyrionexchange</h6>
          </div>
        </div>
        <p className="mt-20 self-center">
          © 2021 — Tyrionexchange - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default landingPage;
