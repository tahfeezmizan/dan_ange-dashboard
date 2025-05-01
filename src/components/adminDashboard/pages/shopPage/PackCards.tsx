/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Modal from "@/components/shared/modal/Modal";
import { Button, Form, Input, Tag } from "antd";
import { useState } from "react";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Loading from "@/components/shared/loading/Loading";
import {
  useDeleteShopPackMutation,
  useGetAllShopPacksQuery,
  useUpdateShopPackMutation,
} from "@/redux/feature/api/shop/ShopAPi";
import { Card } from "antd";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface PackInputs {
  id?: string;
  title: string;
  price: number;
  description: string;
  giftType: string[];
  isActive?: boolean;
}

export default function PackCards() {
  const { data, isLoading, refetch } = useGetAllShopPacksQuery({});
  const packData = data?.data;
  const [deleteShopPack] = useDeleteShopPackMutation();
  const [updateShopPack] = useUpdateShopPackMutation();

  // Edit state management
  const [currentPack, setCurrentPack] = useState<PackInputs | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [giftTypes, setGiftTypes] = useState<string[]>([]);
  const [form] = Form.useForm();

  const handleDelete = async (id: string) => {
    try {
      await deleteShopPack(id).unwrap();
      toast.success("Pack deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Error deleting pack: " + (error as any)?.data?.message);
    }
  };

  const openEditModal = (pack: PackInputs) => {
    setCurrentPack(pack);
    setGiftTypes(pack.giftType || []);
    form.setFieldsValue({
      title: pack.title,
      price: pack.price,
      description: pack.description,
      giftType: pack.giftType || [],
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
    setGiftTypes([]);
    setCurrentPack(null);
  };

  const handleClose = (removedTag: string) => {
    const newGiftTypes = giftTypes.filter((tag) => tag !== removedTag);
    setGiftTypes(newGiftTypes);
    form.setFieldsValue({ giftType: newGiftTypes }); // Update form value
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
      form.setFieldsValue({ giftType: newGiftTypes });
    }
    setInputVisible(false);
    setInputValue("");
  };

  const onFinish = async (values: PackInputs) => {
    form.setFieldsValue({
      giftType: giftTypes,
    });

    try {
      const payload = {
        title: values.title,
        description: values.description,
        price: Number(values.price),
        giftType: giftTypes,
        isActive: true,
      };

      console.log("Submitting payload:", payload);
      const response = await updateShopPack({
        id: currentPack?.id?.toString(),
        data: payload,
      }).unwrap();
      toast.success(response?.message || "Pack updated successfully");
      refetch();
      closeModal();
    } catch (error) {
      console.error("Update error:", error);
      toast.error(
        "Error updating pack: " + (error as any)?.data?.message ||
          "Unknown error"
      );
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-between text-center gap-6">
      {packData?.map((item: PackInputs) => (
        <Card
          key={item.id}
          className="bg-[#F7F0E8] p-1 h-full flex flex-col items-center justify-center"
        >
          <div className="">
            <h2 className="font-semibold text-xl font-museomoderno">
              {item.title}
            </h2>
            <p className="text-3xl font-bold my-4 text-[#4E4E4E]">
              ${item.price}
            </p>
          </div>
          <div className="">
            <p className="text-base font-poppins font-light text-black md:px-14">
              {item.description}
            </p>
            {item.giftType?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.giftType.map((gift, i) => (
                  <Tag key={i} className="bg-gray-100 px-2 py-1 rounded-full">
                    {gift}
                  </Tag>
                ))}
              </div>
            )}
            <div className="flex gap-2 items-end justify-end text-lg mt-2">
              <button onClick={() => openEditModal(item)}>
                <FaEdit className="w-5 h-5" />
              </button>
              <button onClick={() => handleDelete(item.id!)}>
                <RiDeleteBinLine className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Card>
      ))}

      {/* Edit Pack Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit Pack">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <Input
                  placeholder="Pack title"
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
                  placeholder="Pack description"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="price"
                label="Price"
                rules={[
                  { required: true, message: "Please enter a price" },
                  {
                    validator: (_, value) =>
                      !isNaN(Number(value)) && Number(value) > 0
                        ? Promise.resolve()
                        : Promise.reject("Please enter a valid price"),
                  },
                ]}
              >
                <Input
                  type="number"
                  step="0.01"
                  placeholder="19.99"
                  className="mb-4 bg-[#E9E9E9] py-3 px-5 outline-none font-poppins"
                />
              </Form.Item>

              <Form.Item
                name="giftType"
                label="Gift Types"
                rules={[
                  {
                    required: true,
                    message: "Please add at least one gift type",
                  },
                ]}
              >
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
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button
              htmlType="submit"
              className="text-base px-8 py-6 border-none rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
