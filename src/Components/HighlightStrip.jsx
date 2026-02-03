import React from "react";
import creditCard from "../assets/CreditCard.svg";
import HeadPhones from "../assets/HeadPhones.svg";
import Trophy from "../assets/Trophy.svg";
import Package from "../assets/Package.svg";

export default function HighlightStrip() {
  return (
    <>
      <div className="flex my-6 justify-center border-[1px] w-[92%] mx-auto border-[#E4E7E9]">
        {[
          {
            icon: Package,
            heading: "Fasted Delivery",
            subHeading: "Delivery in 24/H",
          },
          {
            icon: Trophy,
            heading: "24 Hours Return",
            subHeading: "100% money-back guarantee",
          },
          {
            icon: creditCard,
            heading: "Secure Payment",
            subHeading: "Your money is safe",
          },
          {
            icon: HeadPhones,
            heading: "Support 24/7",
            subHeading: "Live contact/message",
          },
        ].map((v, i) => {
          return (
            <div
              key={i}
              className="flex not-last:border-r-[1px] gap-x-4 flex-1 px-5 my-3 not-last:border-[#E4E7E9]"
            >
              <img src={v.icon} alt="icon" />
              <div>
                <div className="text-[1rem]">{v.heading}</div>
                <div className="text-[#5F6C72] text-[0.75rem]">
                  {v.subHeading}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
