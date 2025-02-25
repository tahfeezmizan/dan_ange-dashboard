import navLogo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import cartIcon from "@/assets/cart.svg";
import profileIcon from "@/assets/profile.svg";

const Navbar = () => {
  return (
    <div className="bg-secondary text-white font-museomoderno mx-auto text-3xl py-3">
      <div className="container flex items-center justify-between">
        <Image width={224} height={130} src={navLogo} alt="Logo" />
        <div className="flex items-center gap-10">
          <Link
            className="font-museomoderno text-base font-semibold leading-[25px] capitalize"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-museomoderno text-base font-semibold leading-[25px] capitalize"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="font-museomoderno text-base font-semibold leading-[25px] capitalize"
            href="/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="font-museomoderno text-base font-semibold leading-[25px] capitalize"
            href="/creat-a-chance"
          >
            Creat A Chance
          </Link>
          <Link
            className="font-museomoderno text-base font-semibold leading-[25px] capitalize"
            href="/partners"
          >
            Partners
          </Link>
          <Link
            className="font-museomoderno text-base font-semibold leading-[25px] capitalize"
            href="/spin"
          >
            Spin
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Image width={24} height={24} src={cartIcon} alt="Cart" />
            <span className="absolute w-4 h-4 top-0 right-0 p-1 bg-primary rounded-full font-medium capitalize text-[8px] flex justify-center items-center">
              3
            </span>
          </div>
          <div className="bg-primary p-3 rounded-full">
            <Image width={24} height={24} src={profileIcon} alt="Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
