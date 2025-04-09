"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogOut } from "react-icons/io5";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

// Define a type for a NavLink item
interface NavLink {
  name: string;
  href: string;
  icon: React.ElementType;
  children?: NavLink[];
}

const activeLinkStyles = (isActive: boolean) =>
  `flex items-center gap-3 px-3 py-3 rounded-md text-[15px] font-museomoderno text-lg text-black ${
    isActive
      ? "border bg-primary/20 rounded-xl text-black"
      : "hover:shadow hover:shadow-red/20"
  }`;

export default function MainNavLink({
  navLink,
}: {
  user?: { name: string; role: string; image: string } | null;
  navLink: NavLink[];
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    const cleanHref = href.split("?")[0];
    const cleanPathname = pathname.split("?")[0];

    return cleanHref === "/dashboard"
      ? cleanPathname === "/dashboard"
      : cleanPathname.startsWith(cleanHref);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Link href={"/"} className="px-4 lg:px-8 py-1 pb-10 lg:py-0 h-8 mb-10">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="w-40"
        />
      </Link>
      <nav className="px-4 py-6">
        <div className="space-y-1">
          {navLink.map((link) => (
            <div key={link.name}>
              {link.children ? (
                <NavLinkWithChildren link={link} isActive={isActive} />
              ) : (
                <Link
                  href={link.href}
                  className={activeLinkStyles(isActive(link.href))}
                >
                  <div className="rounded">
                    <link.icon className="min-w-5 min-h-5" />
                  </div>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
      <div className="mt-auto px-4 space-y-1">
        <button className="flex items-center font-museomoderno gap-3 px-3 py-3 rounded-md cursor-pointer text-black font-bold text-lg hover:text-red-500">
          <IoLogOut className="min-w-6 min-h-6" />
          Log Out
        </button>
      </div>
    </div>
  );
}

function NavLinkWithChildren({
  link,
  isActive,
}: {
  link: NavLink;
  isActive: (href: string) => boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={activeLinkStyles(isActive(link.href))}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="rounded">
          <link.icon className="min-w-6 min-h-6" />
        </div>
        {link.name}
        <ToggleArrow isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="pl-6 mt-2 space-y-2">
          {link.children?.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className={`font-museomoderno block px-3 py-2 rounded-md text-base text-black ${
                isActive(child.href)
                  ? "font-semibold bg-primary/20 rounded-xl text-black w-48"
                  : "text-gray-500"
              }`}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function ToggleArrow({ isOpen }: { isOpen: boolean }) {
  return isOpen ? (
    <SlArrowUp className="ml-auto w-3.5 h-3.5" />
  ) : (
    <SlArrowDown className="ml-auto w-3.5 h-3.5" />
  );
}
