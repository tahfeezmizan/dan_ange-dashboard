import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "@/assets/cart.svg";
import profileIcon from "@/assets/profile.svg";
import navLogo from "@/assets/logo.svg";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        to="/login"
        className="bg-gradient-to-r from-[#F9AB7FCC] to-white uppercase text-base font-bold leading-[25px] rounded-[32px] py-4 px-8 font-museomoderno transition-all duration-300"
      >
        LOG IN
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to="/signup"
        className="bg-gradient-to-r from-[#F9AB7FCC] to-white uppercase text-base font-bold leading-[25px] rounded-[32px] py-4 px-8 font-museomoderno transition-all duration-300"
      >
        SIGN UP
      </Link>
    ),
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-secondary text-white font-museomoderno mx-auto text-3xl">
      <div className="container flex items-center justify-between">
        <img
          src={navLogo}
          alt="logo"
          className="w-[154px] h-[85px] md:w-[224px] md:h-[130px] lg:w-[280px] lg:h-[162px]"
        />

        {/* Hamburger icon (mobile only) */}
        <div className="flex items-center gap-10 xl:hidden">
          <div
            className="text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="items-center gap-10 hidden xl:flex">
          <Link className="text-base font-semibold leading-[25px]" to="/">
            Home
          </Link>
          <Link
            className="text-base font-semibold leading-[25px]"
            to="/about-us"
          >
            About us
          </Link>
          <Link className="text-base font-semibold leading-[25px]" to="/shop">
            Shop
          </Link>
          <Link
            className="text-base font-semibold leading-[25px]"
            to="/partners"
          >
            Partners
          </Link>
          <Link className="text-base font-semibold leading-[25px]" to="/faq">
            FAQ’s
          </Link>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center gap-3 xl:gap-6">
          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <img src={cartIcon} alt="Cart" className="w-7 h-7" />
            <span className="absolute w-4 h-4 top-0 right-0 p-1 bg-primary rounded-full font-medium capitalize text-[8px] flex justify-center items-center">
              3
            </span>
          </div>

          {/* Profile Dropdown */}
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                  style: {
                    width: "340px",
                    backgroundColor: "#FDE5D7",
                    paddingTop: "26px",
                    paddingBottom: "26px",
                    display: "flex",
                    gap: "24px",
                  },
                }}
                placement="bottom"
                arrow
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <div
                  className="bg-primary p-1 md:p-3 rounded-full cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img
                    src={profileIcon}
                    alt="Profile"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </Dropdown>
            </Space>
          </Space>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`container xl:hidden bg-secondary transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          className="block text-base font-semibold leading-[25px] px-4 py-3"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] px-4 py-3"
          to="/about-us"
        >
          About Us
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] px-4 py-3"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] px-4 py-3"
          to="/partners"
        >
          Partners
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] px-4 py-3"
          to="/faq"
        >
          FAQ’s
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
