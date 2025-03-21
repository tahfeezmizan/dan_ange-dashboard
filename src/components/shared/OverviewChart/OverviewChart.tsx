"use client";
import React from "react";
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
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Sat", payment: 600, booking: 200 },
  { name: "Sun", payment: 700, booking: 500 },
  { name: "Mon", payment: 900, booking: 800 },
  { name: "Tue", payment: 1200, booking: 800 },
  { name: "Wed", payment: 1100, booking: 1000 },
  { name: "Thu", payment: 800, booking: 900 },
  { name: "Fri", payment: 900, booking: 1300 },
];

const OverviewChart: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl  w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base text-[#4E4E4E] font-museomoderno">Overview</h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 font-museomoderno text-base text-[#4E4E4E]">
            <span className="w-3 h-3 bg-[#0000FF] rounded-full"></span>
            <span>Payment</span>
          </div>
          <div className="flex items-center gap-2 font-museomoderno text-base text-[#4E4E4E]">
            <span className="w-3 h-3 bg-[#22C55E] rounded-full"></span>
            <span>Pack Booking</span>
          </div>
        </div>
        <button className="flex items-center gap-1 font-museomoderno px-3 py-1 rounded-md text-[#4E4E4E]">
          <select id="dates" className="outline-none">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}`} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="payment"
            stroke="#0000FF"
            strokeWidth={2}
            dot={{ fill: "#0000FF", r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="booking"
            stroke="#008000"
            strokeWidth={2}
            dot={{ fill: "#008000", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
