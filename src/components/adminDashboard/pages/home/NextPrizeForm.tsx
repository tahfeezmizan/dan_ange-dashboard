"use client";

import { Form, Input, Button, Card } from "antd";
import { FaRegPenToSquare } from "react-icons/fa6";

export default function NextPrizeForm() {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: { [key: string]: any }) => {
    console.log("Form Data:", values);
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Form.Item
              label="START DATE:"
              name="startdate"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Input
                placeholder="5AM"
                className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              />
            </Form.Item>

            <Form.Item
              label="START TIME:"
              name="starttime"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Input
                placeholder="5AM"
                className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              />
            </Form.Item>

            <Form.Item
              label="SOCIAL MEDIA LINK:"
              name="socialmedialink"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Input
                placeholder="http/ socialmedia"
                className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="END DATE:"
              name="enddate"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Input
                placeholder="5"
                className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
              />
            </Form.Item>

            <Form.Item
              label="END TIME:"
              name="endtime"
              className="text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3"
            >
              <Input
                placeholder="9PM"
                className="bg-[#E9E9E9] py-3 px-5 outline-none font-poppins mb-12"
              />
            </Form.Item>

            <div className="flex justify-end font-museomoderno">
              <Button
                htmlType="submit"
                className="text-base px-8 py-6 border-none rounded-full font-bold uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Card>
  );
}
