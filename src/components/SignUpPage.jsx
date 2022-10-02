import React from "react";
import logo from "../assets/logo.png";
import tyrion from "../assets/Tyrion 6.svg";
import icon1 from "../assets/Vector.svg";
import icon2 from "../assets/Vector 2.svg";
import icon3 from "../assets/Vector 3.svg";
import icon4 from "../assets/passwordicon.svg";

function signUpPage() {
  return (
    <div className="ml-36 font-DMSans">
      <img src={logo} alt="logo" className="w-32 mt-16" />
      <div className="flex justify-between">
        <div>
          <h4 className="text-4xl font-semibold mt-11">Create an account</h4>
          <p className="text-xl mb-16">
            Fill in the details to create a{" "}
            <span className="text-[#FBC108]">tyrion</span> account
          </p>
          <form>
            <label className="font-medium text-lg">Username</label>
            <div className=" relative flex mb-10">
              <img src={icon1} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="username"
                type="text"
                placeholder="Username"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg "
                required
              />
            </div>

            <label className="font-medium text-lg">Email</label>
            <div className="relative flex mb-10">
              <img src={icon2} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="username"
                type="email"
                placeholder="Input your email"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg "
                required
              />
            </div>

            <label className="font-medium text-lg">Phone number</label>
            <div className="relative flex mb-10 ">
              <img src={icon3} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="tel"
                type="tel"
                placeholder="Phone number"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg"
                required
              />
            </div>

            <label className="font-medium text-lg">Password</label>
            <div className="relative flex mb-10 mb-10 ">
              <img src={icon4} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="password"
                type="password"
                placeholder="Input your password"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg"
                required
              />
            </div>

            <label className="font-medium text-lg">Repeat password</label>
            <div className="relative flex mb-10 ">
              <img src={icon4} alt="" className="w-3 absolute bottom-6 ml-4" />
              <input
                for="password"
                type="password"
                placeholder="Input your password"
                className="w-558 h-16 border border-gray rounded-lg pl-10 font-normal text-[rgba(0, 0, 0, 0.24)] text-lg "
                required
              />
            </div>

            <button className="w-558 h-16 bg-[#FBC108] text-white mb-5 rounded-lg font-medium text-lg cursor-pointer hover:bg-[#FFCC00]">
              Create an account
            </button>
          </form>
          <h4 className="text-center text-lg">
            Already have an account?{" "}
            <span className="text-[#fbc108] cursor-pointer">Sign in</span>
          </h4>
        </div>
        <div>
          <img src={tyrion} alt="tyrion" />
        </div>
      </div>
    </div>
  );
}

export default signUpPage;
