import React from "react";
import { SectionHeader } from "../shared/header/SectionHeader";

const impactData = [
  {
    id: 1,
    value: "$27M",
    description: "Raised for causes nationwide",
  },
  {
    id: 2,
    value: "7000+",
    description: "Raffles completed",
  },
  {
    id: 3,
    value: "10M+",
    description: "Raffles ticket purchased",
  },
  {
    id: 4,
    value: "$27M",
    description: "Checkout conversion rate",
  },
];

const OurImpact = () => {
  return (
    <div className="container mx-auto px-4 xl:space-y-24">
      {/* Section Header */}
      <SectionHeader title="Our impact." />

      {/* Impact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg px-6 py-10 text-center transition-transform duration-300 hover:scale-105 space-y-8"
          >
            {/* Value */}
            <h3 className="text-4xl md:text-4xl lg:text-4xl xl:text-[56px] font-bold font-museomoderno">
              {item.value}
            </h3>
            {/* Description */}
            <p className="text-gray400 text-sm md:text-base font-light mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpact;
