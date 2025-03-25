import ChoosePack from "@/components/adminDashboard/pages/home/ChoosePack";
import UploadDigitalContent from "@/components/adminDashboard/pages/home/UploadDigitalContent";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const ChoosePacks = () => {
  return (
    <div className="space-y-12">
      <UploadDigitalContent />
      <div>
        <SectionTitle
          title="Choose your promotional pack"
          buttonTitle="Create a pack"
          link="/dashboard/home/create-pack"
        />
        <ChoosePack />
      </div>
    </div>
  );
};

export default ChoosePacks;
