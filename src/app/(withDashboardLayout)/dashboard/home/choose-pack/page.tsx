import ChoosePack from "@/components/adminDashboard/pages/home/ChoosePack";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const ChoosePacks = () => {
  return (
    <div>
      <SectionTitle
        title="Choose your promotional pack"
        buttonTitle="Create a pack"
        link="/dashboard/home/create-pack"
      />
      <ChoosePack />
    </div>
  );
};

export default ChoosePacks;
