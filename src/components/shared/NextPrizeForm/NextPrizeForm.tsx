"use client";

import { useForm } from "react-hook-form";
import { Input, Card } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";

interface FormData {
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  socialmedialink: string;
  image?: FileList;
}

export default function NextPrizeForm() {
  const { register, handleSubmit } = useForm<FormData>();

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
          <div>
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              START DATE:
            </label>
            <Input
              {...register("startdate")}
              placeholder="5AM"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />

            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              Sub Title
            </label>
            <Input
              {...register("starttime")}
              placeholder="5AM"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              Social media link :
            </label>
            <Input
              {...register("socialmedialink")}
              placeholder="http/ socialmedia"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />
          </div>
          <div>
            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              END DATE:
            </label>
            <Input
              {...register("enddate")}
              placeholder="5"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />

            <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
              END TIME
            </label>
            <Input
              {...register("endtime")}
              placeholder="9PM"
              className="bg-[#E9E9E9] py-3 px-5 outline-none font-poppins mb-12"
            />

            <div className="flex justify-end ">
              <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
                save
              </button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}
