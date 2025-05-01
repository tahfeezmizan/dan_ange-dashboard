/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button, Card, Form, Input } from "antd";
import {
  useAddShopDescriptionMutation,
  useGetAllShopDescriptionQuery,
  useUpdateShopDescriptionMutation,
} from "@/redux/feature/api/shop/ShopAPi";
import { toast } from "react-toastify";
import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import { FaEdit } from "react-icons/fa";
import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";

interface packInputs {
  title: string;
  price: string;
  description: string;
  wallpaper: boolean;
  calendar: boolean;
  charity_video: boolean;
}

const ShopDescription = () => {
  const [createShopDescription, { isLoading: createLoading }] =
    useAddShopDescriptionMutation();
  const { data, isLoading } = useGetAllShopDescriptionQuery({});
  const shopDescription = data?.data[0];
  const [updatePartnerHero, { isLoading: updateLoading }] =
    useUpdateShopDescriptionMutation({});

  const [form] = Form.useForm();

  const onFinish = async (values: packInputs) => {
    try {
      const res = await createShopDescription(values).unwrap();
      console.log("Response:", res);
      if (res.success) {
        toast.success(res.message);
        form.resetFields();
      }
    } catch (error: any) {
      toast.error(error?.errorSources);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    description: "",
  });
  const [currentImpactId, setCurrentImpactId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setCurrentImpactId(id);
    const itemToEdit = shopDescription?.id;
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ description: "" });
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
      const res = await updatePartnerHero({
        description: formData.description,
      }).unwrap();

      toast.success(res.message || "Update successful!");
      closeModal();
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
      {/* create shop description  */}
      <Card className="bg-[#F7F0E8] w-full">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                Description
              </label>
            </div>
            <Form.Item name="description">
              <Input.TextArea
                placeholder="Description"
                className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              />
            </Form.Item>
          </div>

          <div className="flex justify-end">
            <Button
              htmlType="submit"
              className="text-base px-6 md:px-8 py-2 md:py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              {createLoading ? <ButtonLoading /> : "Save"}
            </Button>
          </div>
        </Form>
      </Card>
      {/* get shop description data */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
            Shop Description
          </label>
          <button
            onClick={() => openModal(shopDescription?.id)}
            className="flex items-end justify-end text-lg gap-2"
          >
            <FaEdit className="w-5 h-5" />
          </button>
        </div>
        <Card className="bg-[#F7F0E8] w-full">
          <div className="flex flex-col space-y-2">
            <p className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              {shopDescription?.description}
            </p>
          </div>
        </Card>
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

export default ShopDescription;
