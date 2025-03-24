"use client";
import FaqCard from "@/components/adminDashboard/pages/faqPage/FaqCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Switcher from "@/components/shared/Switcher/Switcher";
import { Card, Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegPenToSquare } from "react-icons/fa6";

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    bottomText: "",
  });
  const [bottomData, setBottomData] = useState({
    bottomText: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setBottomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", bottomData);
  };

  const handleButtonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div>
      <SectionTitle title="FAQ’s" buttonTitle="Add Faq" onClick={openModal} />
      <FaqCard />

      <div className="mt-6">
        <Card className="bg-white w-full md:w-[510px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  Bottom text :
                </label>
                <div className="text-lg">
                  <FaRegPenToSquare />
                </div>
              </div>
              <input
                type="text"
                name="bottomText"
                value={bottomData.bottomText}
                onChange={handleInputChange}
                className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                placeholder="Enter title"
              />
            </div>

            <div className="flex justify-end">
              <button className="text-base px-6 md:px-8 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
                save
              </button>
            </div>
          </form>
        </Card>
      </div>

      <Switcher />

      <Modal open={isModalOpen} onCancel={closeModal} title="" footer={null}>
        <div className="mb-4">
          {/* Form fields for title and description */}
          <div className="w-full flex flex-col gap-6">
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
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleButtonSubmit}
            className="text-gray300 text-sm md:text-base px-3 md:px-10 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FAQ;
