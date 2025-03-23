"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaBlogger } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import SideBar from "../navigationBar/SideBar";
import TopBar from "../navigationBar/TopBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLink = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: FaBlogger,
    },
    {
      name: "Order  List",
      href: "/dashboard/orderlist",
      icon: HiViewGridAdd,
    },
    {
      name: "Home",
      href: "/dashboard/home",
      icon: HiViewGridAdd,
      children: [
        { name: "Home Page", href: "/dashboard/home/home-page" },
        { name: "Prizes", href: "/dashboard/home/prizes" },
        { name: "How it works", href: "/dashboard/home/how-it-works" },
        { name: "Choose your pack", href: "/dashboard/home/choose-pack" },
        { name: "Ambassadors", href: "/dashboard/home/ambassadors" },
        { name: "Charity partner", href: "/dashboard/home/charity-partner" },
        { name: "Our impact", href: "/dashboard/home/our-impact" },
        { name: "Winner", href: "/dashboard/home/winner" },
        { name: "FAQ's", href: "/dashboard/home/faqs" },
        { name: "Sponsors", href: "/dashboard/home/sponsors" },
      ],
    },
    {
      name: "About us",
      href: "/dashboard/about-us",
      icon: HiViewGridAdd,
    },
    {
      name: "Shop",
      href: "/dashboard/shop",
      icon: HiViewGridAdd,
    },
    {
      name: "Become a partners",
      href: "/dashboard/become-partners",
      icon: HiViewGridAdd,
    },
    {
      name: "Customer",
      href: "/dashboard/customer",
      icon: HiViewGridAdd,
    },
    {
      name: "FAQ",
      href: "/dashboard/faq",
      icon: HiViewGridAdd,
    },
    {
      name: "Payment",
      href: "/dashboard/payment",
      icon: HiViewGridAdd,
    },
  ];

  return (
    <div className="flex">
      <div className="max-h-screen h-full sticky top-0 z-50">
        <SideBar
          navRef={navRef}
          navLink={navLink}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          user={null}
        />
      </div>
      <div className="w-full">
        <div className="sticky top-0 z-40">
          <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="p-5 xl:p-8 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
