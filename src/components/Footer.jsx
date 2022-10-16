import React from "react";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";



export function Footer() {
    return(
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
    )
}