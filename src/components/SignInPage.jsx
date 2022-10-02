import React from "react";
import logo from "../assets/logo.png";
import icon2 from "../assets/Vector 2.svg";
import tyrion2 from "../assets/Tyrion 5 2.svg";
import icon4 from "../assets/passwordicon.svg";

function signInPage() {
  return (
    <div className="ml-36 font-['DM Sans'] overscroll-x-none font-DMSans">
      <img src={logo} alt="logo" className="w-32 mt-16" />
      <div className="flex justify-between">
        <div>
          <div>
            <h4 className="text-4xl font-semibold mt-11 mb-2">Welcome back!</h4>
            <p className="text-xl mb-16 font-medium">
              Please sign in to your{" "}
              <span className="text-[#FBC108]">tyrion</span> account
            </p>
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
            <div className="mb-14">
              <input type="radio" className="" />
              <label className="ml-2 text-base font-medium">
                Always remember me
              </label>
            </div>

            <h4 className="text-lg mb-16 ">
              Forgot password?{" "}
              <span className="text-[#fbc108] cursor-pointer hover:text-[#FFCC00]">
                Reset password
              </span>
            </h4>

            <button className="w-558 h-16 bg-[#FBC108] text-white mb-5 rounded-lg font-medium text-lg mb-4 cursor-pointer hover:bg-[#FFCC00] ">
              Sign in
            </button>

            <h4 className="text-lg font-medium">
              Don't have an account?{" "}
              <span className="text-[#fbc108] cursor-pointer hover:text-[#FFCC00]">
                Create an account
              </span>
            </h4>
          </div>
        </div>
        <img src={tyrion2} alt="tyrion" />
      </div>
    </div>
  );
}

export default signInPage;
