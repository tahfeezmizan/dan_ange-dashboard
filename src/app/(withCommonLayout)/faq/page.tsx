import FaqBanner from "@/components/faq/FaqBanner";
import Faqs from "@/components/faq/Faqs";
import React from "react";

const Faq = () => {
  return (
    <div className="">
      <FaqBanner />
      <div className="container mx-auto mt-[80px] lg:mt-[330px]">
        <Faqs />
      </div>
    </div>
  );
};

export default Faq;
