"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useCreateShopPrizeMutation } from "@/redux/feature/api/shop/ShopAPi";
import React, { useState } from "react";

const CreatePackForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    quantity: "",
    wallpaper: false,
    calendar: false,
    charityVideo: false,
  });
  const [createPrize] = useCreateShopPrizeMutation();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await createPrize(formData).unwrap();
      console.log("Pack created successfully:", response);
      // Reset form data after successful submission
      setFormData({
        title: "",
        price: "",
        description: "",
        quantity: "",
        wallpaper: false,
        calendar: false,
        charityVideo: false,
      });
    } catch (error) {
      console.error("Error creating pack:", error);
    }
  };

  return (
    <div>
      <SectionTitle title="Create Pack" />
      <form onSubmit={handleSubmit} className="bg-[#F7F0E8] p-6 rounded-md">
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full mb-4">
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              TITLE :
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
              placeholder="Enter title"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              PRICE :
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
              placeholder="Enter a price"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full mb-4">
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              DESCRIPTION :
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg min-h-28"
              placeholder="Enter description"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              QUANTITY OF FREE ENTRIES :
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
              placeholder="Enter a quantity of free entries"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="wallpaper"
              checked={formData.wallpaper}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="block text-gray300 text-sm font-museomoderno font-semibold uppercase">
              WALLPAPER
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="calendar"
              checked={formData.calendar}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="block text-gray300 text-sm font-museomoderno font-semibold uppercase">
              CALENDAR
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="charityVideo"
              checked={formData.charityVideo}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="block text-gray300 text-sm font-museomoderno font-semibold uppercase">
              CHARITY VIDEO
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray300 text-sm md:text-base px-3 md:px-8 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            ADD A PACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePackForm;
