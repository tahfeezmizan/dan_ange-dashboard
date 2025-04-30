import DashboardLayout from "@/components/adminDashboard/dashboardlayout/DashboardLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default layout;
