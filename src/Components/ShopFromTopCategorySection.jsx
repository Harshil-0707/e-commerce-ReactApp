import React from "react";
import mobile from "../assets/mobile.svg";
import electronics from "../assets/electronics.svg";
import cosmetics from "../assets/cosmetics.svg";

export default function ShopFromTopCategorySection() {
  return (
    <>
      <div className="mx-16 mb-5">
        <div className="flex items-center justify-between mb-5 border-b-[1px] pb-2 border-[#D9D9D9]">
          <div className="text-[#232321] text-[clamp(1rem,calc(1.7vw+0.5rem),3rem)] font-bold">
            SHOP FROM <span className="text-[#FCBD01]"> TOP CATEGORIES</span>
          </div>
          <button className="bg-[#FCBD01] cursor-pointer rounded-md text-xs font-semibold py-[6px] px-2">
            VIEW ALL
          </button>
        </div>
        <div className="flex gap-x-7">
          {[
            { img: mobile, content: "Mobile", bgColor: "#F5F5F5" },
            { img: cosmetics, content: "Cosmetics", bgColor: "#F5F5F5" },
            { img: electronics, content: "Electronics", bgColor: "#ECEDEF" },
            { img: mobile, content: "Mobile", bgColor: "#F5F5F5" },
            { img: mobile, content: "Mobile", bgColor: "#F5F5F5" },
            { img: mobile, content: "Mobile", bgColor: "#F5F5F5" },
            { img: mobile, content: "Mobile", bgColor: "#F5F5F5" },
            { img: mobile, content: "Mobile", bgColor: "#F5F5F5" },
          ].map((v, i) => {
            return (
              <div className="flex flex-col items-center flex-1" key={i}>
                <div
                  className={`rounded-full flex bg-[${v.bgColor}] w-[8.5rem] h-[8.5rem] flex-col items-center justify-center`}
                >
                  <img src={v.img} alt="img" className="w-[4rem]" />
                </div>
                <div>{v.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
