"use client";

import { ButtonLoading } from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useCreatePartnerCardMutation } from "@/redux/feature/api/partner/partnerApi";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidImage } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const AddPartner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [createPartnerCard, { isLoading }] = useCreatePartnerCardMutation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null); // Remove the selected image
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get the alt text from the input field
    const title = (
      e.currentTarget.querySelector('input[name="title"]') as HTMLInputElement
    )?.value;
    const description = (
      e.currentTarget.querySelector('input[name="title"]') as HTMLInputElement
    )?.value;

    if (!imageFile) {
      console.log("No image selected");
      return;
    }

    if (!title) {
      console.log("Please enter an title text");
      return;
    }
    if (!description) {
      console.log("Please enter an description text");
      return;
    }

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("file", imageFile);
      const bodyData = {
        title: title,
        description: description,
      };
      formDataToSubmit.append("data", JSON.stringify(bodyData));
      const res = await createPartnerCard(formDataToSubmit).unwrap();
      toast.success(res.message);
      console.log("Sponsor created successfully:", res);
      closeModal();
      setImageFile(null);
    } catch (error) {
      toast.error((error as { data?: { message?: string } })?.data?.message);
      // Handle error (show toast, etc.)
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div>
      <SectionTitle
        title="Sponsors"
        buttonTitle="Add Partner Card"
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Partner Card">
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Wrap content in form element */}
          <div className="mb-4 flex justify-between items-center gap-10">
            <div className="w-full">
              {/* Add Title   */}
              <div className="w-full mb-4">
                <label
                  htmlFor="title"
                  className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
                >
                  Add Title:
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  required // Make field required
                  className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                  placeholder="Enter title"
                />
              </div>
              {/* Add Description  */}
              <div className="w-full mb-4">
                <label
                  htmlFor="description"
                  className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
                >
                  Add Description:
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  required // Make field required
                  className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                  placeholder="Enter description"
                />
              </div>
            </div>

            {/* Custom image upload input */}
            <div className="relative w-[400px] h-[200px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleFileChange}
                required // Make field required
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {imageFile ? (
                <div className="w-full h-full flex justify-center items-center">
                  <Image
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded preview"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button" // Prevent form submission
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-gray-300 text-white rounded-full p-1"
                    aria-label="Remove image"
                  >
                    <IoClose className="w-5 h-5 text-black" />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="imageUpload"
                  className="flex flex-col items-center justify-center text-gray-400 cursor-pointer"
                >
                  <BiSolidImage className="w-16 h-16" />
                  <span>Click to upload image</span>
                </label>
              )}
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit" // Proper form submission
              disabled={isLoading} // Disable during loading
              className={`text-gray400 text-sm md:text-base px-3 md:px-14 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? <ButtonLoading /> : "Add Sponsor"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddPartner;
