import WinnerList from "@/components/adminDashboard/pages/home/WinnerList";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const Winner = () => {
  return (
    <div>
      <SectionTitle
        title="Winner"
        buttonTitle="Add a winner"
        link="/dashboard/home/add-winner"
      />
      <WinnerList />
    </div>
  );
};

export default Winner;
