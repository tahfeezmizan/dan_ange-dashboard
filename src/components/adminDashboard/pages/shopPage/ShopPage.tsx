"use client";

import { useForm } from "react-hook-form";
import { Input, Card, Checkbox } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import PricingCard from "@/components/adminDashboard/pages/shopPage/PricingCard";
import Switcher from "@/components/shared/Switcher/Switcher";
import ProductCard from "@/components/adminDashboard/pages/shopPage/ProductCard";
import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";

interface FormData {
  title: string;
  price: string;
  description: string;
  wallpaper: string;
  calendar: string;
  charity_video: string;
}

export default function ShopPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register: createPack, handleSubmit: handleCreatePack } =
    useForm<FormData>();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmitPack = (data: FormData) => {
    console.log("Form Data:", data);
  };

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

      {/* Description Form */}
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
        <SectionTitle
          title="Shop"
          buttonTitle="Create a pack"
          onClick={openModal}
        />
        <PricingCard />
        <Switcher />

        {/* Create Pack  */}
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Shop">
          <form onSubmit={handleSubmit(onSubmitPack)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  Title:
                </label>
                <Input
                  {...register("title")}
                  placeholder="5AM"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  Description:
                </label>
                <Input.TextArea
                  {...register("description")}
                  placeholder="Description"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />

                {/* Checkboxes */}
                <div className="flex space-x-2 mt-6 uppercase">
                  <Checkbox
                    className="flex items-center text-sm font-semibold font-museomoderno"
                    {...register("wallpaper")}
                  >
                    Wallpaper
                  </Checkbox>
                  <Checkbox
                    className="flex items-center text-base font-semibold font-museomoderno"
                    {...register("calendar")}
                  >
                    Calendar
                  </Checkbox>
                  <Checkbox
                    className="flex items-center text-base font-semibold font-museomoderno"
                    {...register("charity_video")}
                  >
                    Charity Video
                  </Checkbox>
                </div>
              </div>
              <div>
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  Price:
                </label>
                <Input
                  {...register("price")}
                  placeholder="Enter a price"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
                <div className="flex justify-end mt-10">
                  <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </div>

      <div className="">
        <SectionTitle
          title="Explore what's inside"
          buttonTitle="Create a  Product"
          link="#"
        />
        <ProductCard />
      </div>
    </div>
  );
}
