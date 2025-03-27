"use client";

import { useState } from "react";
import { Form, Input, Button, Upload, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FaRegPenToSquare } from "react-icons/fa6";

export default function HeroContentForm() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<File[]>([]);

  interface FormValues {
    title: string;
    subTitle?: string;
    description?: string;
  }

  const onFinish = (values: FormValues) => {
    console.log("Form Data:", { ...values, image: fileList });
  };

  const beforeUpload = (file: File) => {
    setFileList([file]);
    return false;
  };

  return (
    <Card className="bg-[#F7F0E8]">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 flex items-center justify-center h-full rounded-lg border border-dashed border-gray-300">
            <Upload beforeUpload={beforeUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />} className="!bg-transparent border-0">
                Upload Image
              </Button>
            </Upload>
          </div>
          <div>
            <Form.Item
              name="title"
              label={<span className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">Title</span>}
              rules={[{ required: true, message: "Please enter a title" }]}
            >
              <Input placeholder="Enter a title" className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins" />
            </Form.Item>

            <Form.Item
              name="subTitle"
              label={<span className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">Sub Title</span>}
            >
              <Input placeholder="Enter a sub title" className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins" />
            </Form.Item>

            <Form.Item
              name="description"
              label={<span className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">Description</span>}
            >
              <Input.TextArea placeholder="Description" className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins" />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            htmlType="submit"
            className="text-base px-8 py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            Save
          </Button>
        </div>
      </Form>
    </Card>
  );
}
