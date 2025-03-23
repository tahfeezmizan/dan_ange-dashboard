import HeroContentForm from "@/components/adminDashboard/pages/home/HeroContentForm";
import NextPrizeForm from "@/components/adminDashboard/pages/home/NextPrizeForm";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Switcher from "@/components/shared/Switcher/Switcher";
import React from "react";

const DashboardHome = () => {
  return (
    <div className="space-y-12">
      <div>
        <SectionTitle title=" Hero Content" />
        <HeroContentForm />
      </div>
      <div>
        <SectionTitle title="Next Prize Draw in" />
        <NextPrizeForm />
      </div>

      <Switcher />
    </div>
  );
};

export default DashboardHome;
