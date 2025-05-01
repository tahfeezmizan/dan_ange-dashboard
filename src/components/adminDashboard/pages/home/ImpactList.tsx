/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  useDeleteImpactMutation,
  useGetAllImpactsQuery,
  useUpdateImpactMutation,
} from "@/redux/feature/api/impact/impactApi";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
import Modal from "@/components/shared/modal/Modal";
import { FaEdit } from "react-icons/fa";
import { ButtonLoading } from "@/components/shared/loading/Loading";

const ImpactList = () => {
  const { data: impact } = useGetAllImpactsQuery({});
  const impacts = impact?.data;
  const [deleteImpact] = useDeleteImpactMutation();
  const [editImpact, { isLoading }] = useUpdateImpactMutation({});

  const handleDelete = async (id: string) => {
    const res = await deleteImpact(id).unwrap();
    if (res.success) {
      toast.success("Impact removed successfully!");
    } else {
      toast.error(res.message);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [currentImpactId, setCurrentImpactId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setCurrentImpactId(id); // Store the id of the impact being edited
    const itemToEdit = impacts?.find((impact: any) => impact.id === id);
    if (itemToEdit) {
      setFormData(itemToEdit); // Pre-fill form data with the item to edit
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "" }); // Reset form data when closing modal
    setCurrentImpactId(null);
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

    if (!currentImpactId) {
      toast.error("No item selected for editing");
      return;
    }

    try {
      // Create a plain JavaScript object with the data
      const requestData = {
        title: formData.title,
        description: formData.description,
      };

      // Call mutation with id and the plain data object
      const res = await editImpact({
        id: currentImpactId.toString(),
        data: requestData, // Send as plain object, not FormData
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeModal();
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(error?.data?.message || "Update failed");
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <SectionTitle title="Impacts" />

      {/* Impact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts?.map((item: any) => (
          <div key={item.id} className="relative">
            <div className="relative bg-[#F7F0E8] shadow-md rounded-lg px-6 py-10 text-center transition-transform duration-300 hover:scale-105 space-y-8">
              {/* Value */}
              <h3 className="text-2xl md:text-3xl font-bold font-museomoderno">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray400 text-sm md:text-base font-light mt-2">
                {item.description}
              </p>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => openModal(item.id)} // Pass item id to open modal
                className="flex items-end justify-end text-lg"
              >
                <FaEdit className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleDelete(item.id)} // Delete impact
                className="flex items-end justify-end text-lg"
              >
                <BsTrash className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for editing impact */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Update Impact Text"
      >
        <div className="mb-4">
          {/* Form fields for title and description */}
          <div className="w-full flex flex-col gap-5">
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
            {isLoading ? <ButtonLoading /> : "Update"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ImpactList;
