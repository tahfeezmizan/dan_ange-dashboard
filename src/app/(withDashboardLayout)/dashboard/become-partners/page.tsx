import AddPartner from "@/components/adminDashboard/pages/partnerPage/AddPartner";
import BecomePartner from "@/components/adminDashboard/pages/partnerPage/BecomePartner";
import PartnerCard from "@/components/adminDashboard/pages/partnerPage/PartnerCard";
import PartnerList from "@/components/adminDashboard/pages/partnerPage/PartnerList";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
const BecomePartners = () => {
  return (
    <div className="space-y-8">
      {/* <div className="bg-white p-6 rounded-md text-center">
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
      </div> */}
      <BecomePartner />
      <AddPartner />
      <PartnerCard />
      <div className="space-y-8">
        <SectionTitle title="Partner list" />
        <PartnerList />
      </div>
    </div>
  );
};

export default BecomePartners;
