"use client";

import navLogo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import cartIcon from "@/assets/cart.svg";
import profileIcon from "@/assets/profile.svg";
import { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        href="/login"
        onMouseEnter={(e) => (e.currentTarget.style.background = "")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "")}
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
        href="/sign-up"
        onMouseEnter={(e) => (e.currentTarget.style.background = "")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "")}
        className="bg-gradient-to-r from-[#F9AB7FCC] to-white uppercase text-base font-bold leading-[25px] rounded-[32px] py-4 px-8 font-museomoderno transition-all duration-300"
      >
        SIGN UP
      </Link>
    ),
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-secondary text-white font-museomoderno mx-auto text-3xl">
      <div className="container flex items-center justify-between">
        <Image
          width={1000}
          height={1000}
          src={navLogo}
          alt="logo"
          className="w-[154px] h-[85px] md:w-[224px] md:h-[130px] lg:w-[280px] lg:h-[162px]"
        />
        <div className="flex items-center gap-10 xl:hidden">
          <div
            className="text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? "" : ""
              }`}
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
        <div className="items-center gap-10 hidden xl:flex">
          <Link className="text-base font-semibold leading-[25px]" href="/">
            Home
          </Link>
          <Link
            className="text-base font-semibold leading-[25px]"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-base font-semibold leading-[25px]"
            href="/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-base font-semibold leading-[25px]"
            href="/creat-a-chance"
          >
            Create A Chance
          </Link>
          <Link
            className="text-base font-semibold leading-[25px]"
            href="/partners"
          >
            Partners
          </Link>
          <Link className="text-base font-semibold leading-[25px]" href="/spin">
            Spin
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:gap-6">
          {/* cart */}
          <div className="relative cursor-pointer">
            <Image width={24} height={24} src={cartIcon} alt="Cart" />
            <span className="absolute w-4 h-4 top-0 right-0 p-1 bg-primary rounded-full font-medium capitalize text-[8px] flex justify-center items-center">
              3
            </span>
          </div>
          {/* profile */}
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                className="!hover:bg-none"
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
              >
                <div className="bg-primary p-1 md:p-3 rounded-full cursor-pointer">
                  <Image
                    width={24}
                    height={24}
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
          className="block text-base font-semibold leading-[25px] py-2"
          href="/"
        >
          Home
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] py-2"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] py-2"
          href="/how-it-works"
        >
          How It Works
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] py-2"
          href="/creat-a-chance"
        >
          Create A Chance
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] py-2"
          href="/partners"
        >
          Partners
        </Link>
        <Link
          className="block text-base font-semibold leading-[25px] py-2"
          href="/spin"
        >
          Spin
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
