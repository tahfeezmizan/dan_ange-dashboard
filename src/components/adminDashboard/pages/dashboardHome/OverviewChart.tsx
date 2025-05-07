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
  Dot,
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

  // Enhanced metrics configuration
  const metrics = [
    {
      key: "totalPrice",
      name: "Payment",
      color: "#0000FF", // Blue
      dot: { r: 6, fill: "#0000FF" },
      activeDot: { r: 8, fill: "#0000FF" },
    },
    {
      key: "quantity", // Must match API response field exactly
      name: "Pack Booking",
      color: "#22C55E", // Green
      dot: { r: 6, fill: "#22C55E" },
      activeDot: { r: 8, fill: "#22C55E" },
    },
    {
      key: "entries",
      name: "Entries",
      color: "#FF0000", // Red
      dot: { r: 6, fill: "#FF0000" },
      activeDot: { r: 8, fill: "#FF0000" },
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
    // For weekly and monthly, use the name directly
    if (timeRange === "weekly" || timeRange === "monthly") {
      return tickItem;
    }
    // For yearly, try to parse as date
    if (timeRange === "yearly") {
      const date = new Date(tickItem);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", { year: "numeric" });
      }
      return tickItem;
    }
    return tickItem;
  };

  const formatTooltipLabel = (value: string) => {
    // For weekly and monthly, use the name directly
    if (timeRange === "weekly" || timeRange === "monthly") {
      return value;
    }
    // For yearly, try to parse as date
    if (timeRange === "yearly") {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }
      return value;
    }
    return value;
  };

  // Custom dot component - shows only for values > 0
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomDot = (props: any) => {
    const { cx, cy, payload, metricKey } = props;
    const value = payload[metricKey];

    if (value === 0 || value === null || value === undefined) return null;

    const metric = metrics.find((m) => m.key === metricKey);

    return <Dot cx={cx} cy={cy} r={6} fill={metric?.color} />;
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
              dataKey="name"
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
                backgroundColor: "#fff",
              }}
              labelFormatter={formatTooltipLabel}
              formatter={(value, name) => [
                value,
                metrics.find((m) => m.key === name)?.name || name,
              ]}
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
                    dot={<CustomDot metricKey={metric.key} />}
                    activeDot={{
                      r: 8,
                      fill: metric.color,
                    }}
                    connectNulls={true} // This ensures lines connect across null/zero values
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
