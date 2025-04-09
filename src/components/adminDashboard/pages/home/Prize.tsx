"use client";

import Image from "next/image";
import first from "@/assets/home/first.png";
import second from "@/assets/home/second.png";
import third from "@/assets/home/third.png";
import { BsTrash } from "react-icons/bs";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useState } from "react";
import Modal from "@/components/shared/modal/Modal";
import { IoClose } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
const prizes = [
  {
    id: 1,
    title: "GRAND PRIZE",
    description: "Audi A3 valued at $50,000 thanks to Audi Australia.",
    image: first,
  },
  {
    id: 2,
    title: "3 SECONDARY PRIZES TO BE WON",
    description:
      "Sony home theatre packages valued at $5,000, thanks to Sony Australia.",
    image: second,
  },
  {
    id: 3,
    title: "10 RUNNER-UP PRIZES TO BE WON",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes.",
    image: third,
  },
];

const Prize = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
        title="Prizes"
        buttonTitle="Add Prizes"
        onClick={openModal}
      />
      <div className="">
        {/* Responsive Prize Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className="bg-primary/10 shadow-md rounded-xl flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Image Section */}
              <div className="relative w-full p-4 rounded-lg bg-gradient-to-br from-[#F9AB7F] via-[#F9AB7F]/30 to-white h-72 lg:h-60 xl:h-80">
                {/* Image positioned properly inside the gradient */}
                <Image
                  src={prize.image}
                  alt={prize.title}
                  width={1000}
                  height={1000}
                  className="w-[410px] h-60 object-contain bg-no-repeat mx-auto relative z-10"
                />
              </div>
              <div className="space-y-5 px-5">
                {/* Prize Title */}
                <h3 className="font-museomoderno text-xl xl:text-3xl font-semibold mt-4 h-20">
                  {prize.title}
                </h3>

                {/* Description */}
                <p className="text-gray300 text-base lg:text-sm xl:text-base mt-3 h-20">
                  {prize.description}
                </p>
              </div>
              <button className="w-full p-5 flex items-center justify-end">
                <BsTrash className="w-7 h-7  text-2xl text-red-500 bg-" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add FAQ">
        <form onSubmit={handleSubmit} className="">
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
      </Modal>
    </div>
  );
};

export default Prize;
