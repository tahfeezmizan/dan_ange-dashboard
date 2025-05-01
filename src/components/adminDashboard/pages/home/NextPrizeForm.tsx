/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Input, Button, Card, DatePicker, Switch } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";
import dayjs from "dayjs";
import { useState } from "react";
import { useCreatePrizeDrawTimeDateMutation } from "@/redux/feature/api/prizes/prizesApi";
import { toast } from "react-toastify";
import { ButtonLoading } from "@/components/shared/loading/Loading";

export default function NextPrizeForm() {
  const [form] = Form.useForm();
  const [isLive, setIsLive] = useState(true);
  const [createDrawTimming, { isLoading }] =
    useCreatePrizeDrawTimeDateMutation();

  const onFinish = async (values: any) => {
    const formattedData = {
      title: values.title,
      startDateTime: dayjs(values.startDateTime).toISOString(),
      endDateTime: dayjs(values.endDateTime).toISOString(),
      isLive: isLive,
      socialMediaLink: values.socialMediaLink || undefined,
    };

    try {
      const response = await createDrawTimming(formattedData).unwrap();

      toast.success("Prize draw time created successfully!");
      console.log("Response:", response);
    } catch (error: any) {
      toast.error(error?.data?.errorSources[0]?.message);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
    }

    console.log("Form Data:", formattedData);
  };

  return (
    <Card className="bg-[#F7F0E8]">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-base text-[#4E4E4E] font-museomoderno font-semibold uppercase">
            Image
          </h3>
          <div className="text-lg">
            <FaRegPenToSquare />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Form.Item
            label="Title:"
            name="title"
            className="col-span-2 text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input
              placeholder="Enter title"
              className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
            />
          </Form.Item>

          <div>
            <Form.Item
              label="START DATE & TIME:"
              name="startDateTime"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
              rules={[
                {
                  required: true,
                  message: "Please select start date and time!",
                },
              ]}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                className="w-full mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                placeholder="Select start date and time"
              />
            </Form.Item>

            <Form.Item
              label="SOCIAL MEDIA LINK:"
              name="socialMediaLink"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Input
                placeholder="http://socialmedia"
                className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="END DATE & TIME:"
              name="endDateTime"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
              rules={[
                { required: true, message: "Please select end date and time!" },
              ]}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                className="w-full mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                placeholder="Select end date and time"
              />
            </Form.Item>

            <Form.Item
              label="IS LIVE:"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Switch
                checked={isLive}
                onChange={setIsLive}
                checkedChildren="Yes"
                unCheckedChildren="No"
              />
            </Form.Item>

            <div className="flex justify-end font-museomoderno">
              <Button
                htmlType="submit"
                className="text-base px-8 py-6 border-none rounded-full font-bold uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
              >
                {isLoading ? <ButtonLoading /> : "Create"}
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Card>
  );
}
