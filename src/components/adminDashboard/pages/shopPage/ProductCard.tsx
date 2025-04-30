import { Card } from "antd";
import Image from "next/image";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import productImg from "@/assets/product-img.png";

interface Product {
  image: string;
  id: number;
  title: string;
  description: string;
}

const productData: Product[] = [
  {
    image: "https://ibb.co.com/rKM3kZ5f",
    id: 1,
    title: "PRIZE NAME",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes see more",
  },
  {
    image: "https://ibb.co.com/rKM3kZ5f",
    id: 2,
    title: "PRIZE NAME",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes see more",
  },
  {
    image: "https://ibb.co.com/rKM3kZ5f",
    id: 3,
    title: "PRIZE NAME",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes see more",
  },
  {
    image: "https://ibb.co.com/rKM3kZ5f",
    id: 4,
    title: "PRIZE NAME",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes see more",
  },
];

const ProductCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between text-center gap-6">
      {productData.map((item) => (
        <Card
          key={item?.id}
          className="bg-[#F7F0E8] h-full flex flex-col items-center justify-center"
        >
          <Image
            src={productImg}
            width={284}
            height={236}
            className="w-full h-auto"
            alt={item?.title}
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-semibold text-xl font-museomoderno">
              {item?.title}
            </h2>
            <p className="text-base font-poppins font-light text-black">
              {item?.description}
            </p>
            <div className="flex items-end justify-end text-lg gap-2">
              <FiEdit />
              <RiDeleteBinLine />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
