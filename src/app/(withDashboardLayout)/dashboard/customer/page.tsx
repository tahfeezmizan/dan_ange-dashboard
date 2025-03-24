import CustomerList from "@/components/adminDashboard/pages/customerPage/CustomerList";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const Customer = () => {
  return (
    <div className="space-y-8">
      <SectionTitle title="Customer list "/>
      <CustomerList />
    </div>
  );
};

export default Customer;
