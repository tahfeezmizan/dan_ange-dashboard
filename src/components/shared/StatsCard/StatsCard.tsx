import { ClipboardList, Wallet } from "lucide-react";
import React from "react";

const StatsCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex-1 flex justify-between items-center bg-[#F7F0E8] p-6 rounded-xl">
        <div>
          <p className="text-[#4E4E4E] text-sm font-museomoderno">Total Payments</p>
          <h2 className="text-2xl leading-10 font-semibold font-museomoderno">$2,500</h2>
        </div>
        <Wallet className="w-10 h-10 text-gray-700" />
      </div>

      <div className="flex-1 flex justify-between items-center bg-[#F7F0E8] p-6 rounded-xl">
        <div>
          <p className="text-[#4E4E4E] text-sm font-museomoderno">Total Packs Ordered</p>
          <h2 className="text-2xl leading-10 font-semibold font-museomoderno">1,500</h2>
        </div>
        <ClipboardList className="w-10 h-10 text-gray-700" />
      </div>
    </div>
  );
};

export default StatsCard;
