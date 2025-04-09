"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { BiSolidImage } from "react-icons/bi";

const AddWinnerForm = () => {
  const [formData, setFormData] = useState({
    winnerName: "",
    description: "",
    prizeName: "",
    winnerImage: null as File | null,
    prizeImage: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image file changes
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "winner" | "prize"
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "winner") {
        setFormData((prevData) => ({
          ...prevData,
          winnerImage: e.target.files ? e.target.files[0] : null,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          prizeImage: e.target.files ? e.target.files[0] : null,
        }));
      }
    }
  };

  // Remove image
  const handleRemoveImage = (type: "winner" | "prize") => {
    if (type === "winner") {
      setFormData((prevData) => ({
        ...prevData,
        winnerImage: null,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        prizeImage: null,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#F7F0E8] p-6 rounded-md mt-10">
      <SectionTitle title="Add Winner" />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-start w-full gap-10">
          <div className="w-full flex flex-col gap-8 mt-6">
            {/* Winner Image */}
            <div className="w-full">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                WINNER IMAGE :
              </label>
              <div className="relative w-full h-40 bg-gray-200/60 rounded-xl overflow-hidden flex items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "winner")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {formData.winnerImage ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      src={URL.createObjectURL(formData.winnerImage)}
                      alt="Winner"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleRemoveImage("winner")}
                      className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                    >
                      <IoClose className="w-6 h-6" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <BiSolidImage className="w-16 h-16" />
                    <span>No Image Selected</span>
                  </div>
                )}
              </div>
            </div>

            {/* Prize Image */}
            <div className="w-full">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                PRIZE IMAGE :
              </label>
              <div className="relative w-full h-40 bg-gray-200/60 rounded-xl overflow-hidden flex items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "prize")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {formData.prizeImage ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      src={URL.createObjectURL(formData.prizeImage)}
                      alt="Prize"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleRemoveImage("prize")}
                      className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                    >
                      <IoClose className="w-6 h-6" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <BiSolidImage className="w-16 h-16" />
                    <span>No Image Selected</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5 mt-6">
            {/* Winner Name */}
            <div className="w-full">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                WINNER NAME :
              </label>
              <input
                type="text"
                name="winnerName"
                value={formData.winnerName}
                onChange={handleInputChange}
                className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                placeholder="Enter winner's name"
              />
            </div>
            {/* Description */}
            <div className="w-full">
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
            {/* Prize Name */}
            <div className="w-full">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                PRIZE NAME :
              </label>
              <input
                type="text"
                name="prizeName"
                value={formData.prizeName}
                onChange={handleInputChange}
                className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                placeholder="Enter prize name"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="text-white text-sm md:text-base px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWinnerForm;
