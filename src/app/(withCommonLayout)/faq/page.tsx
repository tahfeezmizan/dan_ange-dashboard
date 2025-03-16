import FaqBanner from "@/components/faq/FaqBanner";
import Faqs from "@/components/faq/Faqs";
import React from "react";

const Faq = () => {
  return (
    <div className="min-h-screen">
      <FaqBanner />
      <div className="container mx-auto mt-[350px] space-y-20">
        <Faqs />
      </div>
    </div>
  );
};

export default Faq;
