"use client";

import AddFaq from "@/components/adminDashboard/pages/faqPage/AddFaq";
import FaqCard from "@/components/adminDashboard/pages/faqPage/FaqCard";

const FAQ: React.FC = () => {
  return (
    <div>
      <AddFaq tag="FAQPAGE" />
      <FaqCard />
      {/* <Switcher /> */}
    </div>
  );
};

export default FAQ;
