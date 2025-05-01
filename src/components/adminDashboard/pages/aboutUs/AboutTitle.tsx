/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useCreateAboutUsMutation } from "@/redux/feature/api/aboutus/aboutUsApi";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { toast } from "react-toastify";

interface FormData {
  title: string;
  description: string;
}
const AboutTitle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createAboutUs] = useCreateAboutUsMutation();

  /**
   * Callback function for when the form is submitted.
   * @param {FormData} values - The form data, containing a title and description.
   */

  const onFinish = async (values: FormData) => {
    // Log form data to the console
    console.log("Form Data:", values);

    try {
      const res = await createAboutUs(values).unwrap();

      console.log("Response:", res);

      if (res.success) {
        alert(res.message);
        closeModal();
      }
    } catch (error) {
      toast.error((error as any)?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SectionTitle
        title="About us"
        buttonTitle="Add About us"
        onClick={openModal}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add About us">
        <Form onFinish={onFinish} layout="vertical" className="space-y-4">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input
              placeholder="Enter a title"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              prefix={<FaRegPenToSquare className="text-lg" />}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea
              placeholder="Description"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              className="text-base px-8 py-6 border-none text-black rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7F] to-[#FFFFFF] "
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AboutTitle;
