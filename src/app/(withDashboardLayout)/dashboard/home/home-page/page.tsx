import HeroContentForm from "@/components/adminDashboard/pages/home/HeroContentForm";
import HeroContents from "@/components/adminDashboard/pages/home/HeroContents";
import NextPrizeForm from "@/components/adminDashboard/pages/home/NextPrizeForm";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
// import Switcher from "@/components/shared/Switcher/Switcher";

const DashboardHome = () => {
  return (
    <div className="space-y-12">
      <SectionTitle title=" Hero Content" />
      <HeroContentForm />

      <SectionTitle title="Next Prize Draw in" />
      <NextPrizeForm />
      <HeroContents />
      {/* <Switcher /> */}
    </div>
  );
};

export default DashboardHome;
