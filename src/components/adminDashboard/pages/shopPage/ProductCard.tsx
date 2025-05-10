"use client";

import { Card } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  useDeleteShopPrizeMutation,
  useGetAllShopPrizesQuery,
  useUpdateShopPrizeMutation,
} from "@/redux/feature/api/shop/ShopAPi";
import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import { toast } from "react-toastify";
import Modal from "@/components/shared/modal/Modal";
import { Button, Form, Input } from "antd";
import { IoClose } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";

interface Product {
  image: string;
  id: number;
  title: string;
  description: string;
}

const ProductCard: React.FC = () => {
  const { data, isLoading } = useGetAllShopPrizesQuery({});
  const prizes = data?.data;
  const [deleteShopPrize] = useDeleteShopPrizeMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [currentPrize, setCurrentPrize] = useState<Product | null>(null);
  const [form] = Form.useForm();
  const [updatePrize, { isLoading: isUpdating }] = useUpdateShopPrizeMutation();

  const openEditModal = (prize: Product) => {
    setCurrentPrize(prize);
    form.setFieldsValue({
      title: prize.title,
      description: prize.description,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
    setImageFile(null);
    setCurrentPrize(null);
  };

  interface PrizeInputs {
    title: string;
    description: string;
    image?: string | File;
    id?: number;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  const onFinish = async (values: PrizeInputs) => {
    try {
      const formData = new FormData();

      // Append the new image if it exists, otherwise keep the existing one
      if (imageFile) {
        formData.append("file", imageFile);
      }

      const data = {
        title: values.title,
        description: values.description,
        isLive: true,
      };

      formData.append("data", JSON.stringify(data));

      if (!currentPrize?.id) {
        toast.error("No prize selected for update");
        return;
      }

      // Call the mutation with the prize ID
      const res = await updatePrize({
        id: currentPrize.id,
        data: formData,
      }).unwrap();

      toast.success(res.message);
      console.log("Prize updated successfully:", res);
      closeModal();
    } catch (error) {
      console.error("Error updating prize:", error);
      toast.error(
        (error as { data?: { message?: string } })?.data?.message ||
          "Failed to update prize"
      );
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteShopPrize(id).unwrap();
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product. Please try again.");
      console.error("Failed to delete product:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between text-center gap-6">
      {prizes?.map((item: Product) => (
        <Card
          key={item?.id}
          className="bg-[#F7F0E8] h-full flex flex-col items-center justify-center"
        >
          <Image
            src={item?.image}
            width={1000}
            height={1000}
            className="w-full h-[300px] object-contain rounded-lg"
            alt={item?.title}
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-semibold text-xl font-museomoderno">
              {item?.title}
            </h2>
            <p className="text-base font-poppins font-light text-black">
              {item?.description}
            </p>
            <div className="flex items-end justify-end text-lg gap-2">
              <button onClick={() => openEditModal(item)}>
                <FiEdit />
              </button>
              <button onClick={() => handleDelete(item?.id)}>
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        </Card>
      ))}

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit Product">
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
              ) : currentPrize?.image ? (
                <div className="w-full h-full flex justify-center items-center relative">
                  <Image
                    src={currentPrize.image}
                    alt="Current prize"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <label
                  htmlFor="imageUpload"
                  className="flex flex-col items-center justify-center text-gray-400 cursor-pointer"
                >
                  <BiSolidImage className="w-16 h-16" />
                  <span>Click to upload new image</span>
                </label>
              )}
            </div>
          </div>

          {/* Save Button inside Modal */}
          <div className="flex justify-end mt-6">
            <Button
              htmlType="submit"
              className="text-base px-8 py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
              disabled={isUpdating}
            >
              {isUpdating ? <ButtonLoading /> : "Update"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductCard;
