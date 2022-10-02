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
import hamburger from "../assets/hamburger.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

function landingPage() {
  return (
    <div className="overflow-x-hidden font-DMSans">
      {/* section 1 */}
      <div className="bg-gradient-to-br from-[#e2cc06]  via-black  to-gray-300 pt-12 md:relative">
        {/* header */}
        <div className="md:mx-90 mx-9 flex items-center justify-between">
          <img src={logo2} alt="" className="md:w-32 md:h-14 w-16 h-7" />
          <div className="md:flex items-center text-white font-medium text-base  gap-14 hidden ">
            <h6 className="cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] ">
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
          <button className="bg-[#FBC108]  w-40 h-16 text-white rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00] hidden md:block">
            Dashboard
          </button>
          {/* hamburger for mobile view */}
          <img src={hamburger} alt="" className="md:hidden w-5 h-3" />
          {/* end */}
        </div>
        {/* header ends */}

        {/* hero */}

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
        <img
          src={coins1}
          alt=""
          className="md:absolute top-530 left-890 z-0 hidden md:block"
        />
        <img
          src={ellipse}
          alt=""
          className="md:absolute top-80 left-1380 z-0 hidden md:block"
        />
        <img
          src={polygon}
          alt=""
          className="md:absolute top-700 left-580 z-0 hidden md:block"
        />
        <img
          src={vector1}
          alt=""
          className="md:absolute top-410 left-56 z-0 hidden md:block"
        />
      </div>

      {/* hero section */}

      {/* section 2 */}
      <div className="md:flex md:justify-center gap-36 mx-4 mt-20">
        <div className="flex flex-col items-center mb-16">
          <img src={security} alt="" className="w-24 mb-6 " />
          <h3 className="font-medium text-center text-2xl mb-6">Secure</h3>
          <p className="font-base text-[#00000066] text-center">
            Tyrion is an insured exchange
            <br /> platform that helps you protect
            <br /> your information and earnings.{" "}
          </p>
        </div>

        <div className="flex flex-col items-center mb-16">
          <img src={reliable} alt="" className="w-24 mb-8" />
          <h3 className="font-medium text-center text-2xl mb-6">Reliable</h3>
          <p className="font-base text-[#00000066] text-center">
            Tyrion offers a user-friendly interface
            <br /> & also provide round-the-clock
            <br /> customer service and support.
          </p>
        </div>

        <div className="flex flex-col items-center mb-11">
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
      <h1 className=" text-3xl font-bold text-center mt-20 md:text-6xl">
        Trust is our only
        <br />
        <span className="text-[#FBC108]">currency</span>
      </h1>
      <p className="text-base mt-4 md:mt-9 text-center md:text-3xl mx-8 md:mx-auto">
        We are 3 years experienced Nigerian registered and established
        <br /> exchange that provides local currency for an equal value of gift
        cards
        <br /> and digital assets with a network of foreign and local clientele.{" "}
      </p>

      <div>
        <h1 className="md:mt-24 mt-11 text-2xl font-bold text-center md:text-6xl">
          Trade in 5 simple steps
        </h1>
        <img
          src={vector1}
          alt=""
          className="md:relative md:left-580 md:-top-2 md:z-0 hidden md:block"
        />
      </div>

      <div className="md:flex md:gap-32 md:ml-36 md:mt-44 mt-9 ml-10">
        <div>
          <div className="flex items-center gap-12">
            <img src={radio} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-lg font-bold md:text-3xl text-base">
                Create/Verify your account
              </h1>
              <p className="md:mt-8 mt-5 md:text-2xl text-[#00000063] mr-12">
                We are known for our unique expertise in gift card exchange to
                naira. We have been in existence since 2017 trading gift cards
                and cryptocurrencies offering amazing services to customers in
                Nigeria and beyond.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start  w-5 md:w-11" />
            <div>
              <h1 className="font-lg font-bold md:text-3xl text-base">
                Link your bank
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-lg font-bold md:text-3xl text-base">
                Check for rates
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-lg font-bold md:text-3xl text-base">
                Place your trade
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-12 mt-12">
            <img src={radio2} alt="" className="self-start w-5 md:w-11" />
            <div>
              <h1 className="font-lg font-bold md:text-3xl text-base">
                Get alert
              </h1>
            </div>
          </div>
        </div>
        <img src={tyrion4} alt="" className=" mt-10 mx-auto " />
      </div>
      <button className="flex items-center text-center bg-[#FBC108] mx-auto w-44  md:h-16 h-9 md:pl-11 pl-14 mt-9 py-2  text-white rounded-lg font-medium text-sm md:text-lg cursor-pointer hover:bg-[#FFCC00]">
        Trade now
      </button>

      {/* section 3 */}
      <div className="mt-10 md:mt-32 md:mb-60  bg-[#FFFBEE]  ">
        <video controls className="md:w-944 w-72 md:h-455 h-36 mx-auto">
          <source src="" />
        </video>
      </div>

      {/* section 4 */}
      <div className="md:relative mb-16 mt-16 mx-16 md:mx-auto">
        <img src={image2} alt="" className="hidden md:block" />
        <div className="md:absolute md:top-28 md:left-600 mx:auto">
          <h1 className="font-bold text-3xl md:text-6xl">
            Want to rep a<br />
            <span className="text-[#FBC108]">reputable</span> brand?
          </h1>
          <p className="md:mt-6 mt-2.5 md:text-xl font-medium md:mb-14 text-sm">
            Our Tyrion branded merches are available for
            <br /> sale at affordable prices.
          </p>
          <button className="md:w-44 w-28 md:h-16 h-9 px-2.5 py-2 text-sm  mt-6  bg-black rounded-lg text-white cursor-pointer hover:bg-[#FFCC00]">
            Shop now
          </button>
        </div>
      </div>

      {/* section 5 */}
      <div className="md:mx-52 hidden md:block">
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
            className="w-44 h-16 bg-[#FBC108] rounded-lg text-white cursor-pointer hover:bg-[#FFCC00]"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* footer */}

      <footer className="hidden md:flex bg-black text-white pt-32 pb-12 flex flex-col">
        <div className="flex gap-32 pl-40 ">
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Business</h4>
            <h6
              className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]
              "
            >
              About us
            </h6>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Exchange
            </h6>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108] ">
              Rates
            </h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Legal</h4>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Term of use
            </h6>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Privacy policy
            </h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Product</h4>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Exchange
            </h6>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Cryptocurrency
            </h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Support</h4>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Live chat
            </h6>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Help center
            </h6>
            <h6 className="font-base cursor-pointer hover:text-[#fbc108] active:text-[#fbc108]">
              Give feedback
            </h6>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-xl">Contact</h4>
            <h6 className="font-base">+234 905 678 4456</h6>
            <h6 className="font-base">hello@tyrionexchange</h6>
            <div className="flex gap-2 items-center">
              <img src={insta} alt="" className="w-4 h-4" />
              <img src={twitter} alt="" className="w-5 h-4" />
              <h6 className="font-base">Tyrionexchange</h6>
            </div>
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
