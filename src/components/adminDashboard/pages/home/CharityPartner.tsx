/* eslint-disable @next/next/no-img-element */
"use client";

import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import {
  useDeleteCharityPartnerMutation,
  useGetAllCharityPartnersQuery,
  useUpdateCharityPartnerMutation,
} from "@/redux/feature/api/charityPartner/charityPartnerApi";
import Image from "next/image";
import { useState } from "react";
import { BiSolidImage } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const CharityPartner = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImpactId, setCurrentImpactId] = useState<number | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const { data, isLoading } = useGetAllCharityPartnersQuery({});
  const charityDataArray = data?.data || [];
  const firstCharityItem = charityDataArray[0];
  const [deleteImpact] = useDeleteCharityPartnerMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteImpact(id).unwrap();
    if (res.success) {
      toast.success("Impact removed successfully!");
    } else {
      toast.error(res.message);
    }
  };

  const openModal = (id: number) => {
    setCurrentImpactId(id);
    const itemToEdit = charityDataArray.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (charity: any) => charity.id === id
    );
    if (itemToEdit) {
      setFormData({
        title: itemToEdit.title,
        description: itemToEdit.description,
        image: itemToEdit.image,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      title: "",
      description: "",
      image: "",
    });
    setImageFile(null);
    setCurrentImpactId(null);
  };

  const [updatePartner] = useUpdateCharityPartnerMutation();

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

    if (!currentImpactId) {
      toast.error("No item selected for editing");
      return;
    }

    try {
      const formDataPayload = new FormData();

      // Add file if exists
      if (imageFile) {
        formDataPayload.append("file", imageFile);
      }

      // Create data object
      const dataObject = {
        title: formData.title,
        description: formData.description,
        // Only include image if not being updated
        ...(imageFile ? {} : { image: formData.image }),
      };

      // Stringify and append data
      formDataPayload.append("data", JSON.stringify(dataObject));

      // Call mutation
      const res = await updatePartner({
        id: currentImpactId.toString(),
        data: formDataPayload,
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* Charity Info */}
      {firstCharityItem ? (
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-end gap-5 py-5">
            <button
              onClick={() => openModal(firstCharityItem?.id)} // Pass item id to open modal
              className="flex items-end justify-end text-lg"
            >
              <FaEdit className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleDelete(firstCharityItem?.id)} // Delete impact
              className="flex items-end justify-end text-lg"
            >
              <BsTrash className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center xl:mt-10">
            {/* Text Content */}
            <div>
              <h2 className="font-museomoderno font-semibold text-2xl md:text-3xl lg:text-[32px] text-black lg:mb-4">
                {firstCharityItem?.title}
              </h2>
              <p className="text-gray300 font-light text-sm md:text-base leading-relaxed whitespace-pre-line">
                {firstCharityItem?.description}
              </p>
            </div>

            {/* Charity Image */}
            <div className="w-full">
              <img
                src={firstCharityItem?.image}
                alt="Charity Partner Image"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-80 object-contain"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="flex items-center justify-center my-20 text-xl font-semibold">
          No Charity Partner Available Found
        </p>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Charity Partner Content"
      >
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
              {isLoading ? <ButtonLoading /> : "Submit"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CharityPartner;
