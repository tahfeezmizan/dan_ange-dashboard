/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Image from "next/image";
import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import {
  useCreateSponsorsMutation,
  useDeleteSponsorsMutation,
  useGetAllSponsorsQuery,
} from "@/redux/feature/api/sponsors/sponsorsApi";
import { toast } from "react-toastify";
import { ButtonLoading } from "@/components/shared/loading/Loading";

const Sponsor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [createSponsor, { isLoading }] = useCreateSponsorsMutation();
  const { data } = useGetAllSponsorsQuery({});
  const sponsors = data?.data;
  const [deleteSponsor] = useDeleteSponsorsMutation();

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
    const altText = (
      e.currentTarget.querySelector('input[name="title"]') as HTMLInputElement
    )?.value;

    if (!imageFile) {
      console.log("No image selected");
      // You might want to show an error to the user here
      return;
    }

    if (!altText) {
      console.log("Please enter an alt text");
      // You might want to show an error to the user here
      return;
    }

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("file", imageFile);
      const bodyData = {
        altText: altText,
      };
      formDataToSubmit.append("data", JSON.stringify(bodyData));
      const res = await createSponsor(formDataToSubmit).unwrap();
      toast.success(res.message);
      console.log("Sponsor created successfully:", res);
      closeModal();
      setImageFile(null);
    } catch (error) {
      console.error("Error creating sponsor:", error);
      // Handle error (show toast, etc.)
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
    }
  };

  const handleDelete = async (id: string) => {
    const res = await deleteSponsor(id).unwrap();
    if (res.success) {
      toast.success("Sponsor removed successfully!");
    } else {
      toast.error(res.message);
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
        {sponsors?.map((sponsor: any) => (
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
            <button
              onClick={() => handleDelete(sponsor.id)}
              className="flex justify-end absolute top-4 right-4"
            >
              <BsTrash className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Sponsor Image"
      >
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Wrap content in form element */}
          <div className="mb-4">
            <div className="w-full mb-4">
              <label
                htmlFor="altText"
                className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
              >
                Type Alt Title:
              </label>
              <input
                id="altText"
                type="text"
                name="title"
                required // Make field required
                className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                placeholder="Enter title"
              />
            </div>

            {/* Custom image upload input */}
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
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

export default Sponsor;
