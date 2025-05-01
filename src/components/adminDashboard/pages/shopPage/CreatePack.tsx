/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Button, Form, Input, Tag } from "antd";
import { useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useCreateShopPackMutation } from "@/redux/feature/api/shop/ShopAPi";
import { toast } from "react-toastify";

interface PackInputs {
  title: string;
  price: number;
  description: string;
  giftTypes: string[];
}

const CreatePack = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [giftTypes, setGiftTypes] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [createShopPack] = useCreateShopPackMutation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
    setGiftTypes([]);
    setPrice(0);
  };

  const handleClose = (removedTag: string) => {
    const newGiftTypes = giftTypes.filter((tag) => tag !== removedTag);
    console.log(newGiftTypes);
    setGiftTypes(newGiftTypes);

    form.setFieldsValue({ giftTypes: newGiftTypes });
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !giftTypes.includes(inputValue)) {
      const newGiftTypes = [...giftTypes, inputValue];
      setGiftTypes(newGiftTypes);

      form.setFieldsValue({ giftTypes: newGiftTypes });
    }
    setInputVisible(false);
    setInputValue("");
  };

  const onFinish = async (values: PackInputs) => {
    console.log("Create Pack Form Data:", {
      ...values,
      giftTypes: giftTypes,
      price: price,
      isActive: true,
    });

    try {
      const response = await createShopPack({
        ...values,
        giftType: giftTypes,
        price: price,
        isActive: true,
      }).unwrap();
      toast.success(response?.message);
      form.resetFields();
      console.log("Create Pack Response:", response);
    } catch (error) {
      toast.error(
        "Error creating pack: " + (error as any)?.data?.message ||
          "Unknown error"
      );
    }
    closeModal();
  };

  return (
    <div>
      <SectionTitle
        title="Shop"
        buttonTitle="Create a pack"
        onClick={openModal}
      />

      {/* Create Pack Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Shop">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
          initialValues={{ giftTypes: [] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <Input
                  placeholder="Ramadan Special Pack"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: "Please enter a description" },
                ]}
              >
                <Input.TextArea
                  placeholder="Includes exclusive gifts for Ramadan"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please enter a price" }]}
              >
                <Input
                  type="number"
                  placeholder="19.99"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                  value={price} // Use price state for value
                  onChange={(e) => setPrice(Number(e.target.value))} // Parse input to a number
                />
              </Form.Item>

              <Form.Item label="Gift Types">
                <div className="flex flex-wrap gap-2 mb-2">
                  {giftTypes.map((tag) => (
                    <Tag
                      key={tag}
                      closable
                      onClose={() => handleClose(tag)}
                      className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                      <CloseOutlined className="text-xs" />
                    </Tag>
                  ))}
                </div>
                {inputVisible ? (
                  <Input
                    type="text"
                    size="small"
                    className="w-72"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                    autoFocus
                  />
                ) : (
                  <Button
                    type="dashed"
                    onClick={showInput}
                    icon={<PlusOutlined />}
                    className="flex items-center gap-1"
                  >
                    Add Gift Type
                  </Button>
                )}
                <input
                  type="hidden"
                  name="giftTypes"
                  value={giftTypes.join(",")}
                />{" "}
                {/* Ensure giftTypes is joined into a string if needed */}
              </Form.Item>
            </div>
          </div>

          {/* Save Button inside Modal */}
          <div className="flex justify-end mt-6">
            <Button
              htmlType="submit"
              className="text-base px-8 py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePack;
