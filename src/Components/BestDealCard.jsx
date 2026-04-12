import React from "react";
import bestDelPhoneImage from "../assets/bestDealPhoneImage.svg";

export default function BestDealCard() {
  return (
    <div className="flex flex-col gap-y-2 w-[19.8rem] p-2">
      <div className="bg-[#ECEDEF] flex !outline-[8px] !outline-[#FAFAFA] justify-center rounded-3xl py-7 relative">
        <div className="absolute bg-[#FCBD01] text-white px-[1.1rem] rounded-[50%_0%] left-0 top-0 text-xs font-semibold py-3">
          New
        </div>
        <img src={bestDelPhoneImage} alt="img" />
      </div>
      <div className="text-xl font-bold">
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
      </div>
      <button className="flex cursor-pointer gap-x-2 justify-center bg-[#232321] text-white font-semibold px-10 rounded-md text-sm py-2">
        BUY NOW - <div className="text-[#FFA52F]">₹125</div>
      </button>
    </div>
  );
}
