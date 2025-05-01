/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Loading from "@/components/shared/loading/Loading";
import {
  useDeleteShopPackMutation,
  useGetAllShopPacksQuery,
} from "@/redux/feature/api/shop/ShopAPi";
import { Card } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

export default function PricingCards() {
  const { data, isLoading } = useGetAllShopPacksQuery({});
  const packData = data?.data;
  const [deleteShopPack] = useDeleteShopPackMutation();

  const handleDelete = (id: string) => {
    try {
      deleteShopPack(id)
        .unwrap()
        .then((response) => {
          toast.success(response?.message);
        })
        .catch((error) => {
          toast.error("Error deleting pack: " + error?.data?.message);
        });
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-between text-center gap-6">
      {packData?.map((item: any) => (
        <Card
          key={item?.id}
          className="bg-[#F7F0E8] p-1 h-full flex flex-col items-center justify-center"
        >
          <div className="">
            <h2 className="font-semibold text-xl font-museomoderno">
              {item?.title}
            </h2>
            <p className="text-3xl font-bold my-4 text-[#4E4E4E]">
              ${item?.price}
            </p>
          </div>
          <div className="">
            <p className="text-base font-poppins font-light text-black md:px-14">
              {item?.description}
            </p>
            <div className="flex items-end justify-end text-lg">
              <button onClick={() => handleDelete(item?.id)}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
