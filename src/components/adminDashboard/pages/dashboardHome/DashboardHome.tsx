/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import OverviewChart from "@/components/adminDashboard/pages/dashboardHome/OverviewChart";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
// import StatsCard from "@/components/adminDashboard/pages/dashboardHome/StatsCard";
import OrderListTable from "@/components/OrderListTable/OrderListTable";
import {
  useLazyCsvDownloadQuery,
  useGetAllPrizeDrawQuery,
} from "@/redux/feature/api/csv/csvApi";
import PaymentCards from "../paymentPage/PaymentCards";

const DashboardHomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    data: prizeDrawData,
    isLoading,
    isError,
  } = useGetAllPrizeDrawQuery({});
  const [triggerDownload, { isLoading: isDownloading }] =
    useLazyCsvDownloadQuery();

  const handleDownloadCSV = async (
    startDateTime: string,
    endDateTime: string
  ) => {
    try {
      setIsDropdownOpen(false);
      const result = await triggerDownload({
        std: startDateTime,
        etd: endDateTime,
      });

      if (result.data) {
        const url = window.URL.createObjectURL(result.data);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.csv";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading prize draw data.</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold font-museomoderno">
          Dashboard
        </h1>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-sm md:text-base px-3 md:px-8 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF] flex items-center gap-2"
            disabled={!prizeDrawData?.data?.length || isDownloading}
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                Download CSV File
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {prizeDrawData?.data?.map((draw: any) => (
                  <button
                    key={draw.id}
                    onClick={() =>
                      handleDownloadCSV(draw.startDateTime, draw.endDateTime)
                    }
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    {draw.title} (
                    {new Date(draw.startDateTime).toLocaleDateString()})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <PaymentCards />
      {/* <StatsCard /> */}
      <OverviewChart />
      <SectionTitle title="Order List" />
      <OrderListTable />
    </div>
  );
};

export default DashboardHomePage;
