/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  useCreateAmbassadorMutation,
  useDeleteAmbassadorMutation,
  useGetAllAmbassadorsQuery,
} from "@/redux/feature/api/ambassador/ambassadorApi";
import Loading from "@/components/shared/loading/Loading";
import Modal from "@/components/shared/modal/Modal";
import { ButtonLoading } from "@/components/shared/loading/Loading";
import { Form, Input, Button } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";

const Ambassador = () => {
  const { data, isLoading } = useGetAllAmbassadorsQuery({});
  const videosData = data?.data;
  const [createFaq] = useCreateAmbassadorMutation();
  const [deleteFaq] = useDeleteAmbassadorMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = async (values: { title: string; link: string }) => {
    console.log("Modal Form Data:", values);
    const dataToSubmit = { ...values };
    try {
      const res = await createFaq(dataToSubmit).unwrap();
      console.log("Response:", res);
      if (res.success) {
        toast.success(res.message);
        form.resetFields();
        closeModal();
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    }
    closeModal();
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFaq(id).unwrap();
      console.log("Response:", res);
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SectionTitle
        title="Ambassadors"
        buttonTitle="Add Ambassador Video"
        onClick={openModal}
      />

      {/* Displaying ambassador videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosData?.map((video: any) => {
          // Convert the YouTube link to the embed URL
          const embedLink = video.link
            .replace(
              "https://www.youtube.com/live/",
              "https://www.youtube.com/embed/"
            )
            .split("?")[0];

          return (
            <div key={video?.id} className="relative group cursor-pointer">
              <iframe
                width="100%"
                height="400"
                src={embedLink}
                title={video?.title}
                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 object-contain"
                allowFullScreen
              />
              <button
                onClick={() => {
                  handleDelete(video?.id);
                }}
                className="absolute top-2 right-2 text-white p-2 rounded-full bg-red-500 hover:opacity-100 transition-opacity"
              >
                <RiDeleteBinLine size={24} className="text-white" />
              </button>
            </div>
          );
        })}
      </div>
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
                LINK :
              </span>
            }
            name="link"
          >
            <Input
              className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
              placeholder="Enter link"
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

export default Ambassador;
