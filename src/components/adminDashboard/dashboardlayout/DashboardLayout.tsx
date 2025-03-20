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
      name: "All Blogs",
      href: "/dashboard/all-blogs",
      icon: FaBlogger,
    },
    {
      name: "Order  List",
      href: "/dashboard/add-new-blog",
      icon: HiViewGridAdd,
    },
    {
      name: "Home",
      href: "/dashboard/add-new-blog",
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
          user={null} // replace with user object if available
        />
      </div>
      <div className="w-full">
        <div className="sticky top-0 z-40">
          <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="xl:p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
