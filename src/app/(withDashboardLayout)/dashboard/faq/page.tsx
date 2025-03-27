"use client";

import FaqCard from "@/components/adminDashboard/pages/faqPage/FaqCard";
import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Switcher from "@/components/shared/Switcher/Switcher";
import { Card, Form, Input, Button } from "antd";
import React, { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";

const FAQ: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [bottomForm] = Form.useForm();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = (values: {
    title: string;
    description: string;
  }) => {
    console.log("Modal Form Data:", values);
    closeModal();
  };

  const handleBottomSubmit = (values: { bottomText: string }) => {
    console.log("Bottom Form Data:", values);
  };

  return (
    <div>
      <SectionTitle title="FAQ’s" buttonTitle="Add Faq" onClick={openModal} />
      <FaqCard />

      <div className="mt-6">
        <Card className="bg-[#F7F0E8] w-full md:w-[510px]">
          <Form
            form={bottomForm}
            layout="vertical"
            onFinish={handleBottomSubmit}
          >
            <div className="flex justify-between items-center -mb-1">
              <h3 className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase">
                Bottom text :
              </h3>
              <div className="float-end">
                <FaRegPenToSquare className="text-lg" />
              </div>
            </div>

            <Form.Item label={" "} name="bottomText">
              <Input
                className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                placeholder="Enter title"
              />
            </Form.Item>

            <div className="flex justify-end">
              <Button
                htmlType="submit"
                className="text-base px-6 md:px-8 py-2 md:py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF] transition-all duration-300 hover:from-[#F9AB7FCC] hover:to-[#F9AB7FCC]"
              >
                Save
              </Button>
            </div>
          </Form>
        </Card>
      </div>

      <Switcher />

      <Modal isOpen={isModalOpen} onClose={closeModal} title="">
        <Form form={form} layout="vertical" onFinish={handleModalSubmit}>
          <Form.Item
            label={
              <span className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase">
                TITLE :
              </span>
            }
            name="title"
          >
            <Input
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
              placeholder="Enter title"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase">
                DESCRIPTION :
              </span>
            }
            name="description"
          >
            <Input.TextArea
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg min-h-28"
              placeholder="Enter description"
            />
          </Form.Item>

          <div className="flex justify-center">
            <Button
              htmlType="submit"
              className="text-gray300 text-sm md:text-base px-3 md:px-10 py-2 md:py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FAQ;
