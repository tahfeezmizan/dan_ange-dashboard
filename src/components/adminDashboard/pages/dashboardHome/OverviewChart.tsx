"use client";

import { useGetDashboardQuery } from "@/redux/feature/api/dashboard/DashbaordApi";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OverviewChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"weekly" | "monthly" | "yearly">(
    "weekly"
  );
  const [activeMetrics, setActiveMetrics] = useState<string[]>([
    "totalPrice",
    "quantity",
    "entries",
  ]);

  const {
    data: response,
    isLoading,
    isError,
  } = useGetDashboardQuery(timeRange);
  const chartData = response?.data || [];
  console.log(chartData);

  // Define colors and data keys for each metric
  const metrics = [
    {
      key: "totalPrice",
      name: "Payment",
      color: "#0000FF",
      strokeDasharray: "0",
      activeDot: { r: 6 },
    },
    {
      key: "quantity",
      name: "Pack Booking",
      color: "#22C55E",
      strokeDasharray: "5 5",
      activeDot: { r: 6 },
    },
    {
      key: "entries",
      name: "Entries",
      color: "#FF0000",
      strokeDasharray: "3 4",
      activeDot: { r: 6 },
    },
  ];

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as "weekly" | "monthly" | "yearly");
  };

  const toggleMetric = (metricKey: string) => {
    setActiveMetrics((prev) =>
      prev.includes(metricKey)
        ? prev.filter((key) => key !== metricKey)
        : [...prev, metricKey]
    );
  };

  const formatXAxis = (tickItem: string) => {
    if (timeRange === "monthly") {
      return new Date(tickItem).toLocaleDateString("en-US", { month: "short" });
    }
    if (timeRange === "yearly") {
      return new Date(tickItem).toLocaleDateString("en-US", {
        year: "numeric",
      });
    }
    return new Date(tickItem).toLocaleDateString("en-US", { weekday: "short" });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="bg-white p-4 md:p-8 rounded-xl w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h2 className="text-base text-[#4E4E4E] font-museomoderno">Overview</h2>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          {metrics.map((metric) => (
            <div
              key={metric.key}
              className={`flex items-center gap-2 font-museomoderno text-base cursor-pointer ${
                activeMetrics.includes(metric.key)
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => toggleMetric(metric.key)}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: metric.color }}
              ></span>
              <span>{metric.name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 font-museomoderno px-3 py-1 rounded-md text-[#4E4E4E] border border-gray-300">
          <select
            id="dates"
            className="outline-none bg-transparent cursor-pointer"
            value={timeRange}
            onChange={handleTimeRangeChange}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey=""
              tick={{ fontSize: 12 }}
              tickMargin={10}
              tickFormatter={formatXAxis}
            />
            <YAxis tick={{ fontSize: 12 }} tickMargin={10} />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                border: "none",
              }}
              labelFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "20px",
              }}
              iconType="circle"
              iconSize={10}
            />

            {metrics.map(
              (metric) =>
                activeMetrics.includes(metric.key) && (
                  <Line
                    key={metric.key}
                    type="monotone"
                    dataKey={metric.key}
                    name={metric.name}
                    stroke={metric.color}
                    strokeWidth={2}
                    strokeDasharray={metric.strokeDasharray}
                    dot={metric.activeDot}
                    activeDot={metric.activeDot}
                  />
                )
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;
