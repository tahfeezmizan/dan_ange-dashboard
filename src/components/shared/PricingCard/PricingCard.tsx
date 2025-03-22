"use client";

import { Card, Switch } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";

const pricingData = [
  {
    title: "ESSENTIALS PACK",
    price: 1,
    description: "We’ll send you a Digital Calendar",
  },
  {
    title: "ELITE PACK",
    price: 2,
    description: "We’ll send you a Digital Calendar + Wallpaper",
  },
  {
    title: "ULTIMATE PACK",
    price: 5,
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
  },
];

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-between text-center gap-6">
      {pricingData?.map((item, index) => (
        <Card
          key={index}
          className="bg-[#F7F0E8] p-1 h-full flex flex-col items-center justify-center"
        >
          <div className="">
            <h2 className="font-semibold text-xl font-museomoderno">
              {item.title}
            </h2>
            <p className="text-3xl font-bold my-4 text-[#4E4E4E]">
              ${item.price}
            </p>
          </div>
          <div className="">
            <p className="text-base font-poppins font-light text-black md:px-14">
              {item.description}
            </p>
            <div className="flex items-end justify-end text-lg">
              <RiDeleteBinLine />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
