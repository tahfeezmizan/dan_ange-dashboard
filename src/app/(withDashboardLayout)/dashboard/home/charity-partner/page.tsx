import AddCharityPartner from "@/components/adminDashboard/pages/home/AddCharityPartner";
import CharityPartner from "@/components/adminDashboard/pages/home/CharityPartner";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const CharityPartners = () => {
  return (
    <div>
      <SectionTitle title="Charity partner" />
      <AddCharityPartner />
      <CharityPartner />
    </div>
  );
};

export default CharityPartners;
