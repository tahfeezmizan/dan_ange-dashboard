import CustomerList from "@/components/shared/CustomerList/CustomerList";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

const Customer = () => {
  return (
    <div className="space-y-8">
      <SectionTitle title="Customer list " buttonTitle="see all" link="#" />
      <CustomerList />
    </div>
  );
};

export default Customer;
