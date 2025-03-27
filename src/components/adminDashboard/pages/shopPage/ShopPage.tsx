"use client";

import PricingCard from "@/components/adminDashboard/pages/shopPage/PricingCard";
import ProductCard from "@/components/adminDashboard/pages/shopPage/ProductCard";
import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Switcher from "@/components/shared/Switcher/Switcher";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";

interface packInputs {
  title: string;
  price: string;
  description: string;
  wallpaper: boolean;
  calendar: boolean;
  charity_video: boolean;
}

export default function ShopPage() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: packInputs) => {
    console.log("Create Pack Form Data:", values);
  };

  return (
    <div className="space-y-8">
      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno">Description</h2>
      </div>

      {/* Description Form */}
      <Card className="bg-[#F7F0E8] w-full md:w-[510px]">
        <Form form={form} onFinish={onFinish} layout="vertical" className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                Description
              </label>
              <div className="text-lg">
                <FaRegPenToSquare />
              </div>
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
              Save
            </Button>
          </div>
        </Form>
      </Card>

      <div className="">
        <SectionTitle
          title="Shop"
          buttonTitle="Create a pack"
          onClick={openModal}
        />
        <PricingCard />
        <Switcher />

        {/* Create Pack Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Shop">
          <Form form={form} onFinish={onFinish} layout="vertical" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true, message: "Please enter a title" }]}
                >
                  <Input
                    placeholder="5AM"
                    className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  label="Description"
                  rules={[{ required: true, message: "Please enter a description" }]}
                >
                  <Input.TextArea
                    placeholder="Description"
                    className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                  />
                </Form.Item>

                {/* Checkboxes */}
                <div className="flex space-x-2 mt-6 uppercase">
                  <Form.Item name="wallpaper" valuePropName="checked">
                    <Checkbox className="flex items-center text-sm font-semibold font-museomoderno">
                      Wallpaper
                    </Checkbox>
                  </Form.Item>
                  <Form.Item name="calendar" valuePropName="checked">
                    <Checkbox className="flex items-center text-base font-semibold font-museomoderno">
                      Calendar
                    </Checkbox>
                  </Form.Item>
                  <Form.Item name="charity_video" valuePropName="checked">
                    <Checkbox className="flex items-center text-base font-semibold font-museomoderno">
                      Charity Video
                    </Checkbox>
                  </Form.Item>
                </div>
              </div>

              <div>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true, message: "Please enter a price" }]}
                >
                  <Input
                    placeholder="Enter a price"
                    className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                  />
                </Form.Item>
              </div>
            </div>

            {/* Save Button inside Modal */}
            <div className="flex justify-end mt-6">
              <Button
                htmlType="submit"
                className="text-base px-8 py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal>
      </div>

      <div className="">
        <SectionTitle
          title="Explore what's inside"
          buttonTitle="Create a product"
          link="/dashboard/home/create-pack"
        />
        <ProductCard />
      </div>
    </div>
  );
}
