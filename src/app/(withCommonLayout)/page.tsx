import Banner from "@/components/home/Banner";
import CharityPartner from "@/components/home/CharityPartner";
import ChoosePack from "@/components/home/ChoosePack";
import CurrentPromotion from "@/components/home/CurrentPromotion";
import FromAmbassadors from "@/components/home/FromAmbassadors";
import OurImpact from "@/components/home/OurImpact";
import Prize from "@/components/home/Prize";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="space-y-24">
        <Prize />
        <CurrentPromotion />
        <ChoosePack />
        <FromAmbassadors />
        <CharityPartner />
        <OurImpact />
      </div>
    </div>
  );
}
