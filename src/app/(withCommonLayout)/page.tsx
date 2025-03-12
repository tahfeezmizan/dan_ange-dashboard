import Banner from "@/components/home/Banner";
import CurrentPromotion from "@/components/home/CurrentPromotion";
import Prize from "@/components/home/Prize";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="space-y-32">
        <Prize />
        <CurrentPromotion />
      </div>
    </div>
  );
}
