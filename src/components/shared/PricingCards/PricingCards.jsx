"use client";

import { Card, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

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
  const [active, setActive] = useState(true);

  return (
    <div className="p-6 bg-[#f2f7fc] min-h-screen flex flex-col items-center gap-6">
      <div className="flex gap-4 flex-wrap justify-center">
        {pricingData.map((item, index) => (
          <Card
            key={index}
            className="w-80 bg-[#fdf5ef] rounded-lg shadow-sm text-center relative"
            bodyStyle={{ padding: "24px" }}
          >
            <h2 className="font-bold text-lg tracking-wide">{item.title}</h2>
            <p className="text-3xl font-semibold my-4 text-gray-800">
              ${item.price}
            </p>
            <p className="text-gray-600">{item.description}</p>
            <DeleteOutlined className="absolute bottom-4 right-4 text-gray-500 cursor-pointer" />
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="font-semibold text-gray-700">ACTIVE</span>
        <Switch
          checked={active}
          onChange={() => setActive(!active)}
          className="bg-orange-300"
        />
        <span className="font-semibold text-gray-700">INACTIVE</span>
      </div>
    </div>
  );
}
