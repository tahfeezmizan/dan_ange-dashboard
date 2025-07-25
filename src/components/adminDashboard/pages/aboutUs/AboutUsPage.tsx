"use client";

import {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "@/redux/feature/api/aboutus/aboutUsApi";
import { Card } from "antd";
import AboutTitle from "./AboutTitle";
import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

export default function AboutUsPage() {
  const { data: aboutData, isLoading: isFetching } = useGetAboutUsQuery({});
  const [editAbout, { isLoading }] = useUpdateAboutUsMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [currentImpactId, setCurrentImpactId] = useState<string | null>(null);

  // Open Modal and set initial values
  const openModal = () => {
    const itemToEdit = aboutData?.data;
    if (itemToEdit) {
      console.log(itemToEdit);
      setCurrentImpactId(itemToEdit?.id); 
      setFormData({
        title: itemToEdit.title,
        description: itemToEdit.description,
      });
      setIsModalOpen(true); 
    }
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "" });
    setCurrentImpactId(null); 
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle submit for editing
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

      // Perform the update operation
      const res = await editAbout({
        ...requestData,
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isFetching) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // Rendering the data directly instead of using map
  const aboutItem = aboutData?.data;

  return (
    <div>
      <AboutTitle />
      <div className="grid grid-cols-3 gap-10">
        {aboutItem && (
          <Card key={aboutItem.id} className="bg-[#F7F0E8] p-1">
            <div className="flex items-end justify-end text-lg gap-2 -mb-5">
              <button
                onClick={openModal}
                className="flex items-end justify-end text-lg"
              >
                <FaEdit className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-2xl font-museomoderno font-semibold mb-2">
              {aboutItem?.title}
            </h3>
            <p className="text-base font-poppins font-light text-gray-700 leading-relaxed">
              {aboutItem?.description}
            </p>
          </Card>
        )}
      </div>

      {/* Modal for editing */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Update Impact Text"
      >
        <div className="mb-4">
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
}
