import React from "react";
import biba from "../assets/biba.svg";
import dgLogo from "../assets/d&gLogo.svg";
import hmLogo from "../assets/H&MLogo.svg";
import zaraLogo from "../assets/zaraLogo.svg";
import PradaLogo from "../assets/PradaLogo.svg";
import ChanelLogo from "../assets/ChanelLogo.svg";

export default function BrandSelectionSection() {
  return (
    <>
      <div className="mx-auto w-fit mb-6">
        <div className="font-bold mb-5 text-[clamp(1rem,calc(1.7vw+0.5rem),3rem)]">
          SHOP BY BRANDS
        </div>
        <div className="flex gap-x-17 items-center">
          {[zaraLogo, dgLogo, hmLogo, ChanelLogo, PradaLogo, biba].map(
            (v, i) => {
              return (
                <div
                  key={i}
                  className="h-40 w-40 cursor-pointer bg-[#F4F4F4] rounded-lg px-1 flex justify-center items-center"
                >
                  <img src={v} alt="brand logo" />
                </div>
              );
            },
          )}
        </div>
      </div>
    </>
  );
}
