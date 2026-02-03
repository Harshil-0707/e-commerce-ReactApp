import React from "react";
import arrow from "../assets/arrow.svg";
import bestDealsBanner1 from "../assets/bestDealsBanner1.svg";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* left circle and arrow */}
      <div className="absolute h-20 w-20 z-20 bg-white rounded-full left-[1.3%] top-1/3 flex justify-center items-center">
        <div className="h-16 w-16 z-30 bg-[#F3F9FB] flex justify-center items-center rounded-full">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {/* right circle and arrow */}
      <div className="absolute h-20 w-20 z-20 bg-white rounded-full right-[1.3%] top-1/3 flex justify-center items-center">
        <div className="h-16 w-16 z-30 bg-[#F3F9FB] flex justify-center items-center rotate-180 rounded-full">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {/* advertisement banner */}
      <div className="flex w-[92%] my-3 relative overflow-hidden rounded-xl pl-20 mx-auto bg-[#0C59B6]">
        <div className="text-white flex-1 pt-5">
          <div className="text-[clamp(0.4rem,calc(1vw+0.46rem),3rem)] font-semibold">
            Best Deal Online on smart watches
          </div>
          <div className="text-[clamp(1rem,calc(1.8vw+1rem),5rem)] font-semibold">
            LATEST NIKE SHOES
          </div>
          <div className="text-[clamp(0.4rem,calc(1vw+0.46rem),3rem)] font-semibold">
            UP to 80% OFF
          </div>
        </div>
        <div className="h-[25rem] w-[25rem] absolute rounded-full flex items-center justify-center right-[0%] top-[-90%] z-[1] border-[1px] border-white">
          <div className="h-[23rem] w-[23rem] bg-[#F5A914] rounded-full" />
        </div>
        <img src={bestDealsBanner1} alt="image" className="w-[38%] z-[2]" />
        <div className="border-[1px] w-[12rem] flex items-center justify-center h-[12rem] rounded-full border-white absolute right-[15%] top-[75%]">
          <div className="h-[10rem] w-[10rem] bg-[#F5A914] rounded-full z-[1]" />
        </div>
      </div>
    </div>
  );
}
