"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import logo1 from "@/assets/home/logoone.png";
import logo2 from "@/assets/home/logtwo.png";
import Image from "next/image";
import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const Sponsor = () => {
  const sponsors = [
    { id: 1, image: logo1, alt: "Royal Styles" },
    { id: 2, image: logo2, alt: "Breitling" },
    { id: 3, image: logo1, alt: "Santander" },
    { id: 4, image: logo2, alt: "Breitling" },
    { id: 5, image: logo1, alt: "Company" },
    { id: 6, image: logo2, alt: "Breitling" },
    { id: 7, image: logo1, alt: "Heathrow" },
    { id: 8, image: logo2, alt: "Cander" },
    { id: 8, image: logo2, alt: "Cander" },
    { id: 8, image: logo2, alt: "Cander" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageFile) {
      // Handle the image file upload logic here
      console.log("Submitting image:", imageFile);
      // Close the modal after submission
      closeModal();
    } else {
      console.log("No image selected");
    }
  };

  return (
    <div>
      <SectionTitle
        title="Sponsors"
        buttonTitle="Add Sponsor"
        onClick={openModal}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="relative">
            <div className="relative flex justify-center bg-primary/20">
              <Image
                src={sponsor.image}
                alt={sponsor.alt}
                width={1000}
                height={1000}
                className="object-contain w-48 h-40"
              />
            </div>
            <div className="flex justify-end absolute top-4 right-4">
              <BsTrash className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Sponsor Image"
      >
        <div className="mb-4">
          {/* Custom image upload input */}
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
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
                  className="absolute top-0 right-0 bg-gray-300 text-white rounded-full p-1"
                >
                  <IoClose className="w-5 h-5 text-black" />
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

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="text-gray400 text-sm md:text-base px-3 md:px-14 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Sponsor;
