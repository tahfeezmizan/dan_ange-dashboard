import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import partnerImg from "../../../assets/partner-img.png";
import Image from "next/image";

interface Partner {
  image?: File;
  name: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Influencer Partner",
    description: "Share our mission and engage with your audience.",
  },
  {
    name: "Charity Partner",
    description: "Collaborate to amplify your cause and impact.",
  },
  {
    name: "Prize Partner",
    description: "Showcase your brand through our exciting promotions.",
  },
  {
    name: "Sponsor",
    description:
      "Support our operations and enhance your brand trust through our platform.",
  },
];

export default function PartnerCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between text-center gap-6 rounded-md">
      {partners?.map((item) => (
        <div className="bg-[#F7F0E8] p-7 rounded-md text-center">
          <div className="flex items-end justify-end text-lg gap-2 -mb-5">
            <FiEdit />
            <RiDeleteBinLine />
          </div>
          <Image
            src={partnerImg}
            width={100}
            height={100}
            className="rounded-full mx-auto mb-10"
            alt={item.name}
          />
          <h2 className="text-2xl font-museomoderno font-semibold mb-2">
            {item?.name}
          </h2>
          <p className="text-base font-light font-poppins">
            {item?.description}
          </p>
        </div>
      ))}
    </div>
  );
}
