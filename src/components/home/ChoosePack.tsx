import React from "react";
import SharedButton from "../shared/button/SharedButton";
import { SectionHeader } from "../shared/header/SectionHeader";

// Pack data (dynamic mapping)
const packs = [
  {
    id: 1,
    name: "ESSENTIAL PACK",
    price: "$1",
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
    freeEntries: "1 FREE ENTRY",
  },
  {
    id: 2,
    name: "ELITE PACK",
    price: "$2",
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
    freeEntries: "3 FREE ENTRIES",
  },
  {
    id: 3,
    name: "ULTIMATE PACK",
    price: "$5",
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
    freeEntries: "8 FREE ENTRIES",
  },
];

const PricingSection = () => {
  return (
    <div className="container mx-auto py-12 space-y-24 px-5">
      {/* Section Header */}
      <SectionHeader
        title="Choose Your Pack"
        subtitle="Your chance to win is just a few clicks away. Remember, every purchase also supports the Humpty Dumpty Foundation so you’re making a difference while chasing your dreams."
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        {packs.map((pack) => (
          <div
            key={pack.id}
            className="bg-primary/10 shadow-md rounded-lg px-6 xl:px-8 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg gap-4 py-14"
          >
            {/* Pack Name */}
            <h3 className="text-lg md:text-3xl font-semibold font-museomoderno uppercase">
              {pack.name}
            </h3>

            {/* Price */}
            <p className="text-5xl md:text-4xl lg:text-5xl xl:text-[56px] font-museomoderno font-semibold mt-4">
              {pack.price}
            </p>

            {/* Description */}
            <p className="text-xl xl:text-xl 2xl:text-2xl font-extralight text-gray300 mt-3">
              {pack.description}
            </p>

            {/* Free Entries */}
            <p className="text-4xl lg:text-5xl xl:text-4xl 2xl:text-[50px] font-museomoderno font-semibold mt-6">
              {pack.freeEntries}
            </p>

            {/* Button */}
            <div className="mt-10">
              <SharedButton text="BUY A PACK" classes="" />
            </div>
          </div>
        ))}
      </div>

      {/* Privacy Notice */}
      <p className="text-center text-gray400 font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl font-museomoderno mt-10 max-w-[1000px] mx-auto">
        View our{" "}
        <span className="underline cursor-pointer">
          Privacy Collection Notice
        </span>{" "}
        to learn how we manage your personal information collected when making a
        purchase.
      </p>
    </div>
  );
};

export default PricingSection;
