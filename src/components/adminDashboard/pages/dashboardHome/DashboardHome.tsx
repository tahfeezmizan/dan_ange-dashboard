import OrderListTable from "@/components/OrderListTable/OrderListTable";
import OverviewChart from "@/components/shared/OverviewChart/OverviewChart";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import StatsCard from "@/components/shared/StatsCard/StatsCard";

const DashboardHomePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold font-museomoderno">Dashboard</h1>
        <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
          download csv file
        </button>
      </div>
      <StatsCard />

      <OverviewChart />

      <SectionTitle
        title="Order List"
        buttonTitle="see all"
        link="dashboard/orderlist"
      ></SectionTitle>
      <OrderListTable />
    </div>
  );
};

export default DashboardHomePage;
