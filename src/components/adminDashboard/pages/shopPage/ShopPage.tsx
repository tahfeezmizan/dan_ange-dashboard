"use client";

import ProductCard from "@/components/adminDashboard/pages/shopPage/ProductCard";
import ShopDescription from "./ShopDescription";
import PackCards from "./PackCards";
import CreatePack from "./CreatePack";
import CreatePrize from "./CreatePrize";

export default function ShopPage() {
  return (
    <div className="space-y-8">
      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno">
          Description
        </h2>
      </div>
      <ShopDescription />
      {/* Pack Cards..  */}
      <div>
        <CreatePack />
        <PackCards />
        {/* <Switcher /> */}
      </div>

      <div className="">
        <CreatePrize />
        <ProductCard />
      </div>
    </div>
  );
}
