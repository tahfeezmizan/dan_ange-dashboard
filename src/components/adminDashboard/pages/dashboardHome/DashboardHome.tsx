import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const DashboardHomePage = () => {
  return (
    <div>
      {/* <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold font-museomoderno">Dashboard</h1>
        <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
          download csv file
        </button>
      </div> */}
      <SectionTitle title="Dashboard" buttonTitle="download csv file" link="dashboard/orderlist"></SectionTitle>
    </div>
  );
};

export default DashboardHomePage;
