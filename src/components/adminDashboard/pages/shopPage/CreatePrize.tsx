"use client";

import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useCreateShopPrizeMutation } from "@/redux/feature/api/shop/ShopAPi";
import { toast } from "react-toastify";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";
import { ButtonLoading } from "@/components/shared/loading/Loading";

interface PrizeInputs {
  title: string;
  description: string;
  image: string | File;
}

const CreatePrize = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [createShopPack, { isLoading }] = useCreateShopPrizeMutation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
    setImageFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  const onFinish = async (values: PrizeInputs) => {
    if (!imageFile) {
      toast.error("Please upload an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const data = {
        title: values.title,
        description: values.description,
        isLive: true,
      };

      formData.append("data", JSON.stringify(data));

      // Call the mutation
      const res = await createShopPack(formData).unwrap();

      toast.success(res.message);
      console.log("Prize created successfully:", res);
      closeModal();
    } catch (error) {
      console.error("Error creating prize:", error);
      toast.error(
        (error as { data?: { message?: string } })?.data?.message ||
          "Failed to create prize"
      );
    }
  };

  return (
    <div>
      <SectionTitle
        title="Explore what's inside"
        buttonTitle="Create a product"
        onClick={openModal}
      />
      {/* Create Pack Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Shop">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <Input
                  placeholder="Ramadan Special Pack"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please enter a description" },
                ]}
              >
                <Input.TextArea
                  placeholder="Includes exclusive gifts for Ramadan"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </Form.Item>
            </div>
            {/* Custom image upload input */}
            <div className="relative w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {imageFile ? (
                <div className="w-full h-full flex justify-center items-center relative">
                  <Image
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-gray-300 text-white rounded-full p-1"
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

          {/* Save Button inside Modal */}
          <div className="flex justify-end mt-6">
            <Button
              htmlType="submit"
              className="text-base px-8 py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              {isLoading ? <ButtonLoading /> : "Create"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePrize;
