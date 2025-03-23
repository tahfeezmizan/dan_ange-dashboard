"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiSolidImage } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const CharityPartner = () => {
  const [imageFile, setImageFile] = useState<File | null>(null); // State for uploaded image
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "", // Initialize image as an empty string
  });

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file); // Set the selected file
      setFormData((prevData) => ({
        ...prevData,
        image: file.name, // Store the image file name in formData.image
      }));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null); // Remove the selected image
    setFormData((prevData) => ({
      ...prevData,
      image: "", // Reset the image field in formData
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Log the form data to check the output
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-[#F7F0E8] p-6 rounded-md">
        <div className="flex justify-between gap-8">
          {/* Title & Description section */}
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

          {/* Image Upload section */}
          <div className="w-full">
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              Image :
            </label>
            <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {imageFile ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Image
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-gray-400 text-white rounded-full p-2"
                  >
                    <IoClose className="w-4 h-4" />
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

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray300 text-sm md:text-base px-3 md:px-10 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharityPartner;
