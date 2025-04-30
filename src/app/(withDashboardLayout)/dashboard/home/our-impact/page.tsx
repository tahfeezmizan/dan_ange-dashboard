import Impact from "@/components/adminDashboard/pages/home/Impact";
import ImpactList from "@/components/adminDashboard/pages/home/ImpactList";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const OurImpact = () => {
  return (
    <div>
      <SectionTitle title="Impact Section" />
      <div className="space-y-12">
        <Impact />
        <ImpactList />
      </div>
    </div>
  );
};

export default OurImpact;
