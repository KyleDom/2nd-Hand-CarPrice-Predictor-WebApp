import Link from "next/link";
import React from "react";
import { carBrands } from "../../data/carBrands";

export const CarBrands = () => {
  return (
    <div
      className="bg-contain"
      style={{
        backgroundImage: " url('bg-7.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mx-auto max-w-screen-xl py-6 pb-10 lg:p-6 lg:py-8 lg:pb-12">
        <div className="flex items-center justify-center xl:justify-between">
          <div className="flex-col">
            <div className="mx-auto mt-4 text-center text-2xl font-semibold text-gray-800 sm:max-w-[610px] sm:text-left sm:text-3xl xl:mx-0 xl:max-w-[900px]">
              POPULAR CAR BRANDS
            </div>

            <div className="xl:text-baset mx-auto px-4 pb-5 text-center text-sm font-normal text-gray-700 sm:max-w-[610px] sm:px-0 sm:text-left xl:mx-0 xl:max-w-[900px] xl:text-base">
              Embark on a journey where innovation meets performance, uniting
              the road ahead with an acceleration of excellence.
            </div>
          </div>

          <Link
            href="/used-cars"
            className="mr-1 hidden rounded-md border border-[#FF7A00] bg-gray-50 px-5 py-1 font-semibold hover:bg-[#FF7A00]  xl:block"
          >
            See All
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            {carBrands.map((car, index) => (
              <div
                key={index}
                className="group relative mb-1 cursor-pointer items-center justify-center overflow-hidden rounded-md transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 object-contain"
                    src={car.image}
                    alt="brandImg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80"></div>
                <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="w-full rounded-sm border border-[#FF7A00]  py-2 text-2xl font-medium text-white bg-gray-900">
                    {car.brand}
                  </div>

                  <div className="mt-6 text-base font-light text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-1 text-center">
                    {car.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/shapers"
            className="mt-5 rounded-md border border-gray-800 bg-gray-50 px-16 py-1 font-semibold hover:bg-gray-200 xl:hidden"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};
