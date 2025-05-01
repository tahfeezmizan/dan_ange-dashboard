"use client";

import ProductCard from "@/components/adminDashboard/pages/shopPage/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import ShopDescription from "./ShopDescription";
import PackCards from "./PackCards";
import CreatePack from "./CreatePack";

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
        <SectionTitle
          title="Explore what's inside"
          buttonTitle="Create a product"
          link="/dashboard/home/create-pack"
        />
        <ProductCard />
      </div>
    </div>
  );
}
