"use client";

import { useForm } from "react-hook-form";
import { Input, Card } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";

interface FormData {
  title: string;
  description: string;
}

export default function AboutUsPage() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // <-- Use FormData instead of any
    console.log("Form Data:", data);
  };

  return (
    <div className="">
      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno mb-6">
          About us
        </h2>
      </div>

      <Card className="bg-[#F7F0E8] w-auto md:w-[510px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase">
                Title
              </label>
              <div className="text-lg">
                <FaRegPenToSquare />
              </div>
            </div>
            <Input
              {...register("title")}
              placeholder="Enter a title"
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

          <div className="flex justify-end">
            <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
              save
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
