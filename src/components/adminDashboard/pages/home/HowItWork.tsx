"use client";

import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "CHOOSE A PACK",
    description:
      "Select a pack and get free entry into the draw. Every pack you purchase, gives you an entry into the draw and increases your chances of winning.",
  },
  {
    id: "02",
    title: "RECEIVE YOUR PACK AND ENTRY NUMBER(S)",
    description: "We’ll send you your pack and draw entry number(s).",
  },
  {
    id: "03",
    title: "YOU’VE MADE A DIFFERENCE TO SOMEONE’S LIFE",
    description:
      "For every purchase you make, a portion of funds goes to the Humpty Dumpty Foundation.",
  },
];

const HowItWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  return (
    <div>
      <SectionTitle
        title="How it works"
        buttonTitle="Add how it works"
        onClick={openModal}
      />
      <div className="container mx-auto px-4 py-12 space-y-10 md:space-y-16 xl:space-y-24">
        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start max-w-[600px]"
            >
              {/* Step Number */}
              <h3 className="font-museomoderno text-[70px] md:text-[80px] font-semibold text-[#F9AB7F] leading-none">
                {step.id}
              </h3>

              {/* Step Title */}
              <h4 className="text-lg xl:text-2xl font-museomoderno font-semibold mt-2 lg:h-[30px] ">
                {step.title}
              </h4>

              {/* Step Description */}
              <p className="text-gray200 text-base font-light mt-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add how it works">
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
            onClick={handleSubmit}
            className="text-gray300 text-sm md:text-base px-3 md:px-10 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HowItWork;
