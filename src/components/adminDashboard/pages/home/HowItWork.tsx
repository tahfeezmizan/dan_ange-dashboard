/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  useCreateHowItWorksMutation,
  useDeleteHowItWorksMutation,
  useGetHowItWorksQuery,
  useUpdateHowItWorksMutation,
} from "@/redux/feature/api/addhowitworks/addHowItWorksApi";

import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

const HowItWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [createHowItWorks, { isLoading: isCreating }] =
    useCreateHowItWorksMutation();
  const { data, isLoading } = useGetHowItWorksQuery({});
  const [deleteHowItWorks] = useDeleteHowItWorksMutation();
  const [editHowItWorks, { isLoading: isUpdating }] =
    useUpdateHowItWorksMutation();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createHowItWorks(formData).unwrap();
      console.log("Success:", res);
      if (res.success) {
        toast.success(res.message);

        setFormData({
          title: "",
          description: "",
        });
        closeModal();
      }
    } catch (error) {
      const errorMessage =
        (error as { data?: { message?: string } })?.data?.message ||
        "An error occurred";
      toast.error(errorMessage);
    }
  };

  const handleDelete = async (id: any) => {
    const res = await deleteHowItWorks(id).unwrap();
    if (res.success) {
      toast.success("Faq removed successfully!");
    } else {
      toast.error(res.message);
    }
  };

  const openEditModal = (id: number) => {
    setCurrentEditId(id);
    console.log(data);
    const itemToEdit = data?.data?.find((impact: any) => impact.id === id);
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentEditId) {
      toast.error("No item selected for editing");
      return;
    }

    try {
      const requestData = {
        title: formData.title,
        description: formData.description,
      };

      const res = await editHowItWorks({
        id: currentEditId.toString(),
        data: requestData,
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeEditModal();
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SectionTitle
        title="How it works"
        buttonTitle="Add how it works"
        onClick={openModal}
      />
      <div className="container mx-auto px-4 py-12 space-y-10 md:space-y-16 xl:space-y-24">
        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data?.data?.map((data: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-start max-w-[600px]"
            >
              {/* Step Number */}
              <div className="relative flex items-start justify-between w-full">
                <h3 className="font-museomoderno text-[70px] md:text-[80px] font-semibold text-[#F9AB7F] leading-none">
                  {index + 1}
                </h3>
                <div className="flex items-end justify-end text-lg gap-2 -mb-5">
                  <button
                    onClick={() => openEditModal(data?.id)} // Pass item id to open modal
                    className="flex items-end justify-end text-lg"
                  >
                    <FaEdit className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(data?.id)} className="">
                    {" "}
                    <RiDeleteBinLine className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Step Title */}
              <h4 className="text-lg xl:text-2xl font-museomoderno font-semibold mt-2 lg:h-[30px] ">
                {data.title}
              </h4>

              {/* Step Description */}
              <p className="text-gray200 text-base font-light mt-10">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add how it works">
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
            {isCreating ? <ButtonLoading /> : "Create"}
          </button>
        </div>
      </Modal>

      {/* Edit Modal  */}
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal} title="Edit">
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
                onChange={handleEditInputChange}
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
                onChange={handleEditInputChange}
                className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg min-h-28"
                placeholder="Enter description"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleEditSubmit}
            className="text-gray300 text-sm md:text-base px-3 md:px-10 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            {isUpdating ? <ButtonLoading /> : "Submit"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HowItWork;
