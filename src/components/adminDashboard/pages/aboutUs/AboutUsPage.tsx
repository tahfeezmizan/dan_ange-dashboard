"use client";

import { Form, Input, Card, Button } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";

interface FormData {
  title: string;
  description: string;
}

export default function AboutUsPage() {
  const onFinish = (values: FormData) => {
    // Log form data to the console
    console.log("Form Data:", values);
  };

  return (
    <div className="">
      <div className="">
        <h2 className="text-3xl font-semibold font-museomoderno mb-6">
          About us
        </h2>
      </div>

      <Card className="bg-[#F7F0E8] w-auto md:w-[510px]">
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
      </Card>
    </div>
  );
}
