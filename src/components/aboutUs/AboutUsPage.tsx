"use client";

import SharedBanner from "../shared/sharedBanner/SharedBanner";

const AboutUsPage = () => {
  return (
    <SharedBanner title="About us" breadcrumb="About Us">
      {/* Main Content - Absolute for lg and xl */}
      <div className="xl:px-10 py-16 space-y-10 w-full">
        <h2
          className="text-center font-museomoderno font-semibold 
  text-4xl md:text-4xl lg:text-[44px] xl:text-[56px] text-black
  leading-[1.2] md:leading-[1.3] lg:leading-[1.4] xl:leading-[1.5]"
          // style={{ lineHeight: "65px" }}
        >
          Welcome to Chance Collective, a community where generosity meets
          opportunity.
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Our mission is simple: to create meaningful impact while offering
          something of value in return. Every day, you can explore and purchase
          our digital products, with a portion of proceeds supporting incredible
          charitable causes. From time to time, we also run exciting promotions
          where prizes can be won. Whether you&apos;re here for a digital
          product or a thrilling giveaway, every purchase helps make a
          difference. At Chance Collective, it’s not just about what you
          get—it’s about the good you help create.
        </p>
      </div>
    </SharedBanner>
  );
};

export default AboutUsPage;
