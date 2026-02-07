import React from "react";
import BestDealCard from "./BestDealCard";

export default function DealOfTheDay() {
  return (
    <>
      <div className="mx-auto mb-5">
        <div className="flex items-center mb-5 justify-between mx-16">
          <div className="font-bold uppercase text-[clamp(1rem,calc(1.7vw+0.5rem),3rem)]">
            Today’s Deals of the day
          </div>
          <div className="flex gap-x-2 items-center">
            Deals ends in
            <div className="bg-[#FCBD01] rounded-md text-sm font-bold p-2">
              16d : 21h : 57m : 23s
            </div>
            <div className="bg-[#FCBD01] rounded-md text-xs font-semibold py-[10px] px-2">
              VIEW ALL
            </div>
          </div>
        </div>
        <div className="flex w-fit gap-x-2 mx-auto flex-wrap">
          <BestDealCard />
          <BestDealCard />
          <BestDealCard />
          <BestDealCard />
        </div>
      </div>
    </>
  );
}
