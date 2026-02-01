import React from "react";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import SearchIcon from "../assets/search.svg";
import cart from "../assets/cart.svg";
import Wishlist from "../assets/Wishlist.svg";

const NavLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/signup",
    label: "signup",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white py-3 px-[clamp(1rem,4vw,3rem)] flex justify-between">
        <div>Welcome to worldwide Megamart!</div>
        <div>Deliver to 123456 | Track your order | All Offers</div>
      </div>
      <nav className="flex items-center px-[5.5dvw] py-5 border-b-[1px] border-b-[rgba(0,0,0,0.3)]">
        {/* Left: Logo */}
        <img src={logo} alt="logo" className="w-auto" />

        {/* Center: Navigation Links */}
        <ul className="flex items-center gap-x-10 ml-[12.1dvw] mr-[15dvw]">
          {NavLinks?.map((v, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={v?.to}
                  className={({ isActive }) =>
                    `hover:text-gray-600 transition-colors h-10  ${
                      isActive ? "underline" : "text-gray-900"
                    }`
                  }
                >
                  {v?.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-x-6">
          <div className="flex items-center bg-[#F5F5F5] rounded-sm w-[23dvw] py-2 px-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-black mr-auto outline-none"
            />
            <img
              src={SearchIcon}
              alt="search"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          <img
            src={Wishlist}
            alt="wishlist"
            className="w-9 h-9 cursor-pointer"
          />
          <img src={cart} alt="cart" className="w-9 h-9 cursor-pointer" />
        </div>
      </nav>
    </>
  );
}
