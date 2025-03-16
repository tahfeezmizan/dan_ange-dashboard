"use client";

import { SectionHeader } from "../shared/header/SectionHeader";
import SharedBanner from "../shared/sharedBanner/SharedBanner";

const FaqBanner = () => {
  return (
    <div>
      {" "}
      <SharedBanner title="FAQ’s" breadcrumb="FAQ">
        {/* Main Content - Absolute for lg and xl */}
        <div className="xl:px-10 space-y-10 w-full py-20">
          <SectionHeader title="Frequently asked questions ?" />
          <p className="text-center text-gray-600 mt-4">
            We understand you may have questions! Below are answers to some of
            the most common inquiries about our prize draws, ticket purchases,
            and more.s
          </p>
        </div>
      </SharedBanner>
    </div>
  );
};

export default FaqBanner;
