import BecomeAPartner from "@/components/partners/BecomeAPartner";
import OurPartners from "@/components/partners/OurPartners";
import PartnerForm from "@/components/partners/PartnerForm";
import PartnersBanner from "@/components/partners/PartnersBanner";

const Partners = () => {
  return (
    <div className="min-h-screen space-y-5 md:space-y-14 lg:space-y-24">
      <PartnersBanner />
      <OurPartners />
      <BecomeAPartner />
      <PartnerForm />
    </div>
  );
};

export default Partners;
