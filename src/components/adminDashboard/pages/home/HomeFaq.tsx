"use client";
import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";
import { Card } from "antd";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const data = [
  {
    question: "How do I participate in a prize draw?",
    answer:
      "Participating is easy! Simply buy a ticket for the prize you’re interested in. Each ticket gives you a chance to win in the draw. The more tickets you buy, the higher your chances!",
  },
  {
    question: "How do I participate in a prize draw?",
    answer:
      "Participating is easy! Simply buy a ticket for the prize you’re interested in. Each ticket gives you a chance to win in the draw. The more tickets you buy, the higher your chances!",
  },
  {
    question: "How do I participate in a prize draw?",
    answer:
      "Participating is easy! Simply buy a ticket for the prize you’re interested in. Each ticket gives you a chance to win in the draw. The more tickets you buy, the higher your chances!",
  },
];

const HomeFaq = () => {
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
        title="Home FAQ's"
        buttonTitle="Add Faq for homepage"
        onClick={openModal}
      />


      <div className="flex flex-col gap-6 ">
        {data.map((item, index) => (
          <Card key={index} className="bg-[#F7F0E8] p-1">
            <div className="flex items-end justify-end text-lg gap-2 -mb-5">
              <FiEdit />
              <RiDeleteBinLine />
            </div>
            <h3 className="text-2xl font-museomoderno font-semibold  mb-2">
              {item?.question}
            </h3>
            <p className="text-base font-poppins font-light text-gray-700 leading-relaxed">
              {item?.answer}
            </p>
          </Card>
        ))}
      </div>


      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add FAQ">
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

export default HomeFaq;
