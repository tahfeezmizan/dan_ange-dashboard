/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Modal from "@/components/shared/modal/Modal";
import {
  useDeletePartnerCardMutation,
  useGetAllPartnerCardInfoQuery,
} from "@/redux/feature/api/partner/partnerApi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Input, Upload } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

interface FormData {
  title: string;
  subTitle: string;
  image?: FileList;
}

// const partners: Partner[] = [
//   {
//     id: 1,
//     name: "Influencer Partner",
//     description: "Share our mission and engage with your audience.",
//   },
//   {
//     id: 2,
//     name: "Charity Partner",
//     description: "Collaborate to amplify your cause and impact.",
//   },
//   {
//     id: 3,
//     name: "Prize Partner",
//     description: "Showcase your brand through our exciting promotions.",
//   },
//   {
//     id: 4,
//     name: "Sponsor",
//     description:
//       "Support our operations and enhance your brand trust through our platform.",
//   },
// ];

export default function PartnerCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetAllPartnerCardInfoQuery({});
  const partnerCard = data?.data;
  const [deleteFn] = useDeletePartnerCardMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteFn(id).unwrap();
    if (res.success) {
      toast.success("Impact removed successfully!");
    } else {
      toast.error(res.message);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between text-center gap-6 rounded-md">
        <div className="col-span-1 md:col-span-2 xl:col-span-4">
          {!partnerCard?.length && (
            <div className="flex items-center justify-center w-full">
              <h2 className="text-2xl font-museomoderno font-semibold mb-2">
                No Partner Added Yet
              </h2>
            </div>
          )}
        </div>

        {partnerCard?.map((item: any) => (
          <div
            key={item?.id}
            className="bg-[#F7F0E8] p-7 rounded-md text-center"
          >
            <div className="flex items-end justify-end text-lg gap-2 -mb-5">
              <button onClick={openModal}>
                <FiEdit />
              </button>
              <button onClick={() => handleDelete(item?.id)}>
                <RiDeleteBinLine />
              </button>
            </div>
            <Image
              src={item?.image}
              width={100}
              height={100}
              className="rounded-full mx-auto mb-10"
              alt={item?.name}
            />
            <h2 className="text-2xl font-museomoderno font-semibold mb-2">
              {item?.title}
            </h2>
            <p className="text-base font-light font-poppins">
              {item?.description}
            </p>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="">
        <Card className="border-none">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  Title
                </label>
                <Input
                  {...register("title")}
                  placeholder="Enter a title"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />

                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  Sub Title
                </label>
                <Input
                  {...register("subTitle")}
                  placeholder="Enter a sub title"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </div>

              <div className="">
                <h3 className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  image
                </h3>
                <div className="bg-gray-100 h-36 flex items-center justify-center  rounded-lg border border-dashed border-gray-300">
                  <Upload
                    beforeUpload={(file) => {
                      setValue("image", file as unknown as FileList);
                      return false;
                    }}
                    showUploadList={false}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      className="!bg-transparent border-0"
                    >
                      Upload Image
                    </Button>
                  </Upload>
                </div>

                {/* submit button  */}
                <div className="flex justify-end mt-6 ">
                  <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
                    save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Card>
      </Modal>
    </div>
  );
}
