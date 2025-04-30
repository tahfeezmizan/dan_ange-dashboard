"use client";

import { ButtonLoading } from "@/components/shared/loading/Loading";
import { useCreateImpactMutation } from "@/redux/feature/api/impact/impactApi";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai"; // Import edit icon
import { toast } from "react-toastify";

const Impact = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [createImpact, { isLoading }] = useCreateImpactMutation();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createImpact(formData).unwrap();

    if (res.success) {
      toast.success(res.message);
      setFormData({
        title: "",
        description: "",
      });
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="bg-[#F7F0E8] p-6 max-w-3xl rounded-md mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-[#4E4E4E] text-base font-semibold uppercase mb-3">
            TITLE :
            <AiOutlineEdit className="inline ml-2 cursor-pointer text-lg text-gray-600" />
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full bg-gray-200 rounded-lg"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-6">
          <label className="block text-[#4E4E4E] text-base font-semibold uppercase mb-3">
            DESCRIPTION :
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full bg-gray-200 rounded-lg min-h-28"
            placeholder="Enter description"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray400 font-museomoderno text-sm md:text-base px-10 py-3 rounded-full font-bold bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            {isLoading ? <ButtonLoading /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Impact;
