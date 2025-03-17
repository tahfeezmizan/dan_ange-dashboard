import ShopBanner from "@/components/shop/ShopBanner";
import ShopPack from "@/components/shop/ShopPack";
import ShopPrize from "@/components/shop/ShopPrize";

import React from "react";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <ShopBanner />
      <div className="container mx-auto lg:mt-[300px] space-y-20">
        <ShopPack />
        <ShopPrize />
      </div>
    </div>
  );
};

export default Shop;
