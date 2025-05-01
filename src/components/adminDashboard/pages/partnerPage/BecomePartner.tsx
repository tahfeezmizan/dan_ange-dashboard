/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import {
  useDeletePartnerHeroMutation,
  useGetPartnerHeroQuery,
  useUpdatePartnerHeroMutation,
} from "@/redux/feature/api/partner/partnerApi";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const BecomePartner = () => {
  const { data, isLoading } = useGetPartnerHeroQuery({});
  const partnerHero = data?.data[0];
  const [updatePartnerHero, { isLoading: updateLoading }] =
    useUpdatePartnerHeroMutation({});
  const [deletePartnerHero] = useDeletePartnerHeroMutation();

  const handleDelete = async (id: string) => {
    const res = await deletePartnerHero(id).unwrap();
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
    setCurrentImpactId(id);
    const itemToEdit = partnerHero?.id;
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "" });
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
      const requestData = {
        title: formData.title,
        description: formData.description,
      };
      const res = await updatePartnerHero({
        id: currentImpactId.toString(),
        data: requestData,
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeModal();
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
      <div className="bg-white p-6 rounded-md text-center">
        <div className="flex items-center justify-end text-lg gap-5">
          <button
            onClick={() => openModal(partnerHero.id)}
            className="flex items-end justify-end text-lg gap-2"
          >
            <FaEdit className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleDelete(partnerHero.id)}
            className="flex items-end justify-end text-lg"
          >
            <BsTrash className="w-5 h-5" />
          </button>
        </div>
        <h2 className="text-3xl font-museomoderno font-semibold mb-2">
          {partnerHero?.title}
        </h2>
        <p className="text-base font-light font-poppins">
          {partnerHero?.description}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Update Partner Hero Content"
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
            {updateLoading ? <ButtonLoading /> : "Update"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BecomePartner;
