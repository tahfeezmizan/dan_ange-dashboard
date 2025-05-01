"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { ButtonLoading } from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import { useCreateFaqMutation } from "@/redux/feature/api/faq/FaqApi";
import { Form, Input, Button } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";

const AddFaq = ({ tag }: { tag: "FAQPAGE" | "HOME" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [createFaq, { isLoading }] = useCreateFaqMutation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = async (values: {
    title: string;
    description: string;
  }) => {
    console.log("Modal Form Data:", values);
    const dataToSubmit = { ...values, tag };
    try {
      const res = await createFaq(dataToSubmit).unwrap();
      console.log("Response:", res);
      if (res.success) {
        toast.success(res.message);
        form.resetFields();
        closeModal();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    }
    closeModal();
  };
  return (
    <div>
      <SectionTitle title="FAQ’s" buttonTitle="Add Faq" onClick={openModal} />
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
              {isLoading ? <ButtonLoading /> : "Submit"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddFaq;
