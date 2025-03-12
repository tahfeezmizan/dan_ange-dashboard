import Banner from "@/components/home/Banner";
import ChoosePack from "@/components/home/ChoosePack";
import CurrentPromotion from "@/components/home/CurrentPromotion";
import Prize from "@/components/home/Prize";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="space-y-24">
        <Prize />
        <CurrentPromotion />
        <ChoosePack />
      </div>
    </div>
  );
}
