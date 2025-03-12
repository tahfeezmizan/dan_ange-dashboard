"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative text-white px-5 mt-32 lg:mt-48 xl:mt-40 flex flex-col justify-end">
      {/* Less rounded on small (`sm`) screens */}
      <div
        className="absolute bottom-0 left-0 w-full h-[80vh] md:hidden bg-secondary"
        style={{ clipPath: "ellipse(100% 85% at 50% 100%)" }}
      ></div>

      {/* More rounded on `md`, `lg`, `xl` screens */}
      <div
        className="absolute bottom-0 left-0 w-full h-[95vh] hidden md:block xl:h-[90vh] 2xl:h-[70vh] bg-secondary"
        style={{ clipPath: "ellipse(65% 70% at 50% 100%)" }}
      ></div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 pb-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-end space-y-6 text-center">
          <div className="flex flex-col items-start gap-6">
            {/* Logo */}
            <Image
              src={logo}
              alt="Chance Collective"
              width={1000}
              height={1000}
              className="w-64"
            />

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white border rounded-full p-2 transition"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white border rounded-full p-2 transition"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white border rounded-full p-2 transition"
              >
                <IoLogoInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white border rounded-full p-2 transition"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6 text-sm md:text-base">
            <a href="#" className="hover:text-gray-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              About us
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Shop
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Partners
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              FAQ’s
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Customer Support
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center w-full border-t border-white mt-6 mb-3 pt-4 text-sm">
          <p className="font-museomoderno text-sm md:text-base xl:text-lg font-semibold">
            Copyright ©2025. All Rights Reserved
          </p>
          <p className="font-museomoderno text-sm md:text-base xl:text-lg font-semibold text-center">
            We use and manage your personal information in accordance with our{" "}
            <a href="#" className="underline text-white hover:text-gray-400">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
