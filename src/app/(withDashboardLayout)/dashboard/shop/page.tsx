"use client";

import { useForm } from "react-hook-form";
import { Input, Card } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import PricingCard from "@/components/shared/PricingCard/PricingCard";
import Switcher from "@/components/shared/Switcher/Switcher";
import ProductCard from "@/components/shared/ProductCard/ProductCard";

interface FormData {
  description: string;
}

export default function Shop() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="space-y-8">
      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno">
          Description
        </h2>
      </div>

      <Card className="bg-[#F7F0E8] w-full md:w-[510px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                Description
              </label>
              <div className="text-lg">
                <FaRegPenToSquare />
              </div>
            </div>
            <Input.TextArea
              {...register("description")}
              placeholder="Description"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />
          </div>

          <div className="flex justify-end">
            <button className="text-base px-6 md:px-8 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
              save
            </button>
          </div>
        </form>
      </Card>

      <div className="">
        <SectionTitle title="Shop" buttonTitle="Create a pack" link="#" />
        <PricingCard />
        <Switcher />
      </div>

      <div className="">
        <SectionTitle
          title="Explore what's inside"
          buttonTitle="Create a  Products"
          link="#"
        />
        <ProductCard />
      </div>
    </div>
  );
}
