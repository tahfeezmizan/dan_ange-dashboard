// dashboardApi.ts
import { baseApi } from "../baseApi";

const getDateRange = (timePeriod: string) => {
  const now = new Date();
  const startDate = new Date(now); // Clone current date

  switch (timePeriod) {
    case "weekly":
      startDate.setDate(now.getDate() - 6); // 7 days including today
      break;
    case "monthly":
      startDate.setDate(1); // First day of current month
      break;
    case "yearly":
      startDate.setMonth(0, 1); // January 1st of current year
      break;
    default:
      startDate.setDate(now.getDate() - 6); // Default to weekly
  }

  // Set time to beginning of day for start date
  startDate.setHours(0, 0, 0, 0);
  // Set time to end of day for end date
  now.setHours(23, 59, 59, 999);

  return {
    start: startDate.toISOString(),
    end: now.toISOString(),
  };
};

const DashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: (timePeriod = "weekly") => {
        const { start, end } = getDateRange(timePeriod);
        return {
          url: `/dashboard/chart`,
          method: "GET",
          params: {
            std: start,
            etd: end,
            timePeriod,
          },
        };
      },
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardQuery } = DashboardApi;
