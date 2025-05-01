"use client";

import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import { BiSolidImage } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import prize from "@/assets/home/third.png";

const prizes = [
  {
    id: 1,
    image: prize,
    title: "GRAND PRIZE",
    description: "Audi A3 valued at $50,000 thanks to Audi Australia.",
  },
  {
    id: 2,
    image: "",
    title: "3 SECONDARY PRIZES TO BE WON",
    description:
      "Sony home theatre packages valued at $5,000, thanks to Sony Australia.",
  },
  {
    id: 3,
    image: "",
    title: "10 RUNNER-UP PRIZES TO BE WON",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes.",
  },
];

const UploadDigitalContent = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
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
    console.log(formData);
  };

  return (
    <div>
      <SectionTitle
        title="Upload digital content"
        buttonTitle="Add a digital content"
        onClick={openModal}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div
            key={prize.id}
            className="bg-primary/10 shadow-md rounded-xl flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="space-y-5 p-5">
              {/* Prize Image */}
              {prize.image ? (
                <div className="w-full h-72 ">
                  <Image
                    src={prize.image}
                    alt={prize.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full mx-auto"
                  />
                </div>
              ) : (
                <div className="w-60 h-60 flex items-center mx-auto">
                  <CiImageOn className="w-20 h-20 mx-auto text-gray300" />
                </div>
              )}

              {/* Prize Title */}
              <h3 className="font-museomoderno text-gray300 text-base lg:text-sm xl:text-base mt-3 h-10">
                {prize.title}
              </h3>
            </div>
            <button className="w-full p-5 flex items-center justify-end">
              <BsTrash className="w-7 h-7  text-2xl text-red-500 bg-" />
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Upload digital content"
      >
        <form onSubmit={handleSubmit} className="">
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
            {/* Image Upload section */}
            <div className="w-full">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                Image :
              </label>
              <div className="relative w-full h-60 bg-gray-200/60 rounded-lg overflow-hidden flex items-center justify-center">
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
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="text-gray300 text-sm md:text-base px-3 md:px-10 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              SAVE
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UploadDigitalContent;
