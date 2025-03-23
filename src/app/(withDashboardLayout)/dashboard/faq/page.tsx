import FaqCard from "@/components/adminDashboard/pages/faqPage/FaqCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const FAQ = () => {
  return (
    <div>
      <SectionTitle title="FAQ’s" buttonTitle="Add Faq " link="#" />
      <FaqCard />
    </div>
  );
};

export default FAQ;
