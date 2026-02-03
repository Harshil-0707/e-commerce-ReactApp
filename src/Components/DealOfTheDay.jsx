import React from "react";

export default function DealOfTheDay() {
  return (
    <>
      <div className="mx-auto mb-5">
        <div className="flex items-center mb-5 justify-between">
          <div className="font-bold uppercase text-[clamp(1rem,calc(1.7vw+0.5rem),3rem)]">
            Today’s Deals of the day
          </div>
          <div>Deals ends in</div>
        </div>
        <div></div>
      </div>
    </>
  );
}
