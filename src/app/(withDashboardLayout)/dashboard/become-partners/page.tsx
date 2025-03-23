import PartnerCard from "@/components/shared/PartnerCard/PartnerCard";
import PartnerList from "@/components/shared/PartnerList/PartnerList";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";
import { FiEdit } from "react-icons/fi";

const BecomePartners = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-md text-center">
        <div className="flex items-end justify-end text-lg gap-2 -mb-5">
          <FiEdit />
        </div>
        <h2 className="text-3xl font-museomoderno font-semibold mb-2">
          Become Our Partner
        </h2>
        <p className="text-base font-light font-poppins">
          Want to join the Chance Collective family? We’re always looking for
          passionate partners to help us make a difference. Whether you’re a
          brand, charity, influencer, or sponsor, there’s a place for you here.
          Explore our partnership opportunities:
        </p>
      </div>

      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno mb-6">Card</h2>
        <PartnerCard />
      </div>

      <div className=" space-y-8">
        <SectionTitle title="Partner list " buttonTitle="see all" link="#" />
        <PartnerList />
      </div>
    </div>
  );
};

export default BecomePartners;
