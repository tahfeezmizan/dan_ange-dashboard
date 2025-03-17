import Banner from "@/components/home/Banner";
import CharityPartner from "@/components/home/CharityPartner";
import ChoosePack from "@/components/home/ChoosePack";
import CurrentPromotion from "@/components/home/CurrentPromotion";
import FromAmbassadors from "@/components/home/FromAmbassadors";
import HomeFaq from "@/components/home/HomeFaq";
import OurImpact from "@/components/home/OurImpact";
import Prize from "@/components/home/Prize";
import RecentWinners from "@/components/home/RecentWinners";
import Sponsors from "@/components/home/Sponsors";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mt-0 md:mt-10  xl:mt-40 space-y-24">
        <Prize />
        <CurrentPromotion />
        <ChoosePack />
        <FromAmbassadors />
        <CharityPartner />
        <OurImpact />
        <RecentWinners />
        <HomeFaq />
        <Sponsors />
      </div>
    </div>
  );
}
