import React from "react";
import { SectionHeader } from "../shared/header/SectionHeader";

const steps = [
  {
    id: "01",
    title: "CHOOSE A PACK",
    description:
      "Select a pack and get free entry into the draw. Every pack you purchase, gives you an entry into the draw and increases your chances of winning.",
  },
  {
    id: "02",
    title: "RECEIVE YOUR PACK AND ENTRY NUMBER(S)",
    description: "We’ll send you your pack and draw entry number(s).",
  },
  {
    id: "03",
    title: "YOU’VE MADE A DIFFERENCE TO SOMEONE’S LIFE",
    description:
      "For every purchase you make, a portion of funds goes to the Humpty Dumpty Foundation.",
  },
];

const CurrentPromotion = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10 md:space-y-16 xl:space-y-24">
      {/* Section Title */}
      <SectionHeader title="How our current promotion works." />
      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-start max-w-[600px]">
            {/* Step Number */}
            <h3 className="font-museomoderno text-[50px] sm:text-[60px] md:text-[120px] font-semibold text-[#F9AB7F] leading-none">
              {step.id}
            </h3>

            {/* Step Title */}
            <h4 className="text-lg md:text-3xl font-museomoderno font-semibold mt-2 h-[68px]">
              {step.title}
            </h4>

            {/* Step Description */}
            <p className="text-gray200 text-base font-light mt-10">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPromotion;
