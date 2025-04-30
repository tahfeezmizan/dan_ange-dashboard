"use client";

import { useCreateCharityPartnerMutation } from "@/redux/feature/api/charityPartner/charityPartnerApi";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidImage } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const AddCharityPartner = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [createPartner, { isLoading }] = useCreateCharityPartnerMutation();
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
      setImageFile(file);
      setFormData((prevData) => ({
        ...prevData,
        image: file.name,
      }));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setFormData((prevData) => ({
      ...prevData,
      image: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    try {
      const formDataToSubmit = new FormData();
      if (imageFile) {
        formDataToSubmit.append("file", imageFile);
      }
      const bodyData = {
        title: formData.title,
        description: formData.description,
      };
      formDataToSubmit.append("data", JSON.stringify(bodyData));
      const res = await createPartner(formDataToSubmit).unwrap();

      toast.success(res.message);
      console.log("Sponsor created successfully:", res);
      setImageFile(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
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
          {isLoading ? (
            <>
              <div className="flex items-center gap-4">
                {" "}
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </div>
            </>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddCharityPartner;
