import HeroContentForm from "@/components/shared/HeroContentForm/HeroContentForm";
import NextPrizeForm from "@/components/shared/NextPrizeForm/NextPrizeForm";
import Switcher from "@/components/shared/Switcher/Switcher";
import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-semibold font-museomoderno mb-8">
          Hero Content
        </h2>
        <HeroContentForm />
      </div>

      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno mb-8">
          Next Prize Draw in
        </h2>
        <NextPrizeForm />
      </div>

      <Switcher />
    </div>
  );
};

export default DashboardHome;
