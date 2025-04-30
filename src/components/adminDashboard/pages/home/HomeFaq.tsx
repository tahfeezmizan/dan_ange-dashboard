/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";
import { Card } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  useDeleteFaqMutation,
  useGetAllFaqsQuery,
  useUpdateFaqMutation,
} from "@/redux/feature/api/faq/FaqApi";
import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import AddFaq from "../faqPage/AddFaq";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";

const HomeFaq = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [currentFaqId, setCurrentFaqId] = useState<number | null>(null);
  const { data: faq, isLoading } = useGetAllFaqsQuery({ tag: "HOME" });
  const faqs = faq?.data;
  const [deleteFaq] = useDeleteFaqMutation();
  const [editFaq, { isLoading: isUpdating }] = useUpdateFaqMutation();
  const handleDelete = async (id: any) => {
    const res = await deleteFaq(id).unwrap();
    if (res.success) {
      toast.success("Faq removed successfully!");
    } else {
      toast.error(res.message);
    }
  };
  const openModal = (id: number) => {
    setCurrentFaqId(id); // Store the id of the impact being edited
    const itemToEdit = faqs?.find((impact: any) => impact.id === id);
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
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

    if (!currentFaqId) {
      toast.error("No item selected for editing");
      return;
    }

    try {
      const requestData = {
        title: formData.title,
        description: formData.description,
      };

      const res = await editFaq({
        id: currentFaqId.toString(),
        data: requestData,
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeModal();
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isLoading) return;
  <Loading />;

  return (
    <div>
      <AddFaq tag="HOME" />
      <div className="flex flex-col gap-6 ">
        {faqs.map((item: any) => (
          <Card key={item?.id} className="bg-[#F7F0E8] p-1">
            <div className="flex items-end justify-end text-lg gap-2 -mb-5">
              <button
                onClick={() => openModal(item?.id)} // Pass item id to open modal
                className="flex items-end justify-end text-lg"
              >
                <FaEdit className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleDelete(item?.id)}
                className="text-red-500"
              >
                {" "}
                <RiDeleteBinLine />
              </button>
            </div>
            <h3 className="text-2xl font-museomoderno font-semibold  mb-2">
              {item?.title}
            </h3>
            <p className="text-base font-poppins font-light text-gray-700 leading-relaxed">
              {item?.description}
            </p>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add FAQ">
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
            {isUpdating ? <ButtonLoading /> : "Submit"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HomeFaq;
