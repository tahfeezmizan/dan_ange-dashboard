"use client";

import { useForm } from "react-hook-form";
import { Input, Button, Upload, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FaRegPenToSquare } from "react-icons/fa6";

interface FormData {
  title: string;
  subTitle: string;
  description: string;
  image?: FileList;
}

export default function HeroContentForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <Card className="bg-[#F7F0E8]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base text-[#4E4E4E] font-museomoderno font-semibold uppercase">
            Image
          </h3>

          <div className="text-lg">
            <FaRegPenToSquare />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 flex items-center justify-center h-full rounded-lg border border-dashed border-gray-300">
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

            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              Description
            </label>
            <Input.TextArea
              {...register("description")}
              placeholder="Description"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
          save
          </button>
        </div>
      </form>
    </Card>
  );
}
