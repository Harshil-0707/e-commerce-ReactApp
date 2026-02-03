import React from "react";
import logo from "../assets/Logo.svg";
import cart from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import arrow from "../assets/arrow.svg";
import saleIcon from "../assets/saleIcon.svg";
import SearchIcon from "../assets/search.svg";
import userIcon from "../assets/userIcon.svg";
import myDealsIcon from "../assets/myDealsIcon.svg";

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white py-3 px-[clamp(1rem,4vw,3rem)] flex justify-between">
        <div>Welcome to worldwide Megamart!</div>
        <div className="flex gap-x-7">
          <div className="cursor-pointer">Deliver to 123456</div>|
          <div className="cursor-pointer">Track your order</div>|
          <div className="cursor-pointer">All Offers</div>
        </div>
      </div>
      <nav className="flex items-center px-[5.5dvw] gap-x-5 border-b-[1px] border-b-[#EDEDED]">
        <img src={menu} alt="menu" />
        <img src={logo} alt="logo" className="w-auto" />

        <img src={saleIcon} alt="sale" className="h-[7rem]" />

        <div className="flex items-center bg-[#F3F9FB] rounded-md py-3 px-4">
          <img
            src={SearchIcon}
            alt="search"
            className="w-4 h-4 cursor-pointer mr-2"
          />
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
            className="text-black outline-none w-[20rem]"
          />
        </div>

        <div className="flex gap-x-5">
          <div className="flex gap-x-2 items-center text-[#FC7901] border-r-2 pr-5 border-[#D9D9D9]">
            <img src={myDealsIcon} alt="my dears" />
            My Deals
          </div>
          <div className="flex border-r-2 pr-5 border-[#D9D9D9]">
            <img src={userIcon} alt="user icon" className="user icon" />
            Sign Up / Sign In
          </div>
          <div className="cursor-pointer flex gap-x-2">
            <img src={cart} alt="cart" className="w-6 h-6" />
            Cart
          </div>
        </div>
      </nav>
      {/* options */}
      <div className="flex gap-x-4 justify-center py-4 text-sm font-semibold border-b-[1px] border-b-[#EDEDED]">
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="All Categories" id="">
            <option value="All Categories">All Categories</option>
            <option value="Groceries">Groceries</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Premium Fruits">Premium Fruits</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Sports, Toys & Luggage">
              Sports, Toys & Luggage
            </option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Home Improvement">Home Improvement</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Beauty">Beauty</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Electronics">Electronics</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
        <div className="flex bg-[#F3F9FB] rounded-full gap-x-3 items-center py-2 px-4">
          <select name="" id="">
            <option value="Fashion">Fashion</option>
          </select>
          <img src={arrow} alt="arrow" className="rotate-270 h-3" />
        </div>
      </div>
    </>
  );
}
