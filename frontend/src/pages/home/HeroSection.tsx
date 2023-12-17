import React from "react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div
      className="bg-contain"
      style={{
        backgroundImage: " url('hero-bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="min-h-screen max-w-[1200px]">
        <div className="sm:pl-14 pl-6 flex text-white pt-52 flex-col">
          <div className="md:text-5xl text-2xl sm:text-4xl font-semibold uppercase">
            <div className="md:mb-4 mb-2"> Get Instant Estimates for </div>
            <span className="text-[#FF7A00]"> Second-Hand Car </span>
            Prices
          </div>
          <div className="md:text-3xl sm:text-2xl text-xl mt-10">
            Over 1000+ Used Cars Available Here
          </div>
          <div className="md:text-xl sm:text-lg text-base mt-2 md:max-w-[450px] max-w-[380px]">
            Our cutting-edge algorithm predicts accurate prices for used cars,
            helping you make informed decisions.
          </div>
          <div className="flex items-center mt-8">
            <Link
              href="/check-car-prices"
              className=" rounded bg-[#FF7A00] md:px-10 sm:px-8 py-3 font-medium text-white hover:bg-[#F17400] md:text-xl text-sm px-2 sm:text-base"
            >
              Check Car Price
            </Link>
            <div className="sm:mx-8 mx-4">
              <Link
                href="/used-cars"
                className=" rounded border border-[#FF7A00] md:px-10 py-3 font-medium text-white hover:bg-black md:text-xl text-sm px-2 sm:text-base sm:px-8"
              >
                Search Used Cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
