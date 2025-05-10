"use client";

import { Table, Button } from "antd";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import Modal from "@/components/shared/modal/Modal";
import {
  useDeleteHeroContentMutation,
  useGetAllHeroContentsQuery,
  useUpdateHeroContentMutation,
} from "@/redux/feature/api/heroContent/HeroContentApi";
import { toast } from "react-toastify";
import Loading from "@/components/shared/loading/Loading";

interface HeroContentData {
  key: string;
  title: string;
  subTitle: string;
  description: string;
  heroImage: string;
  isLive: boolean;
  createdAt: string;
  updatedAt: string;
}

const HeroContents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<HeroContentData | null>(
    null
  );
  const { data, isLoading } = useGetAllHeroContentsQuery({});
  const [updateIsLive] = useUpdateHeroContentMutation();
  const [deleteHeroContent] = useDeleteHeroContentMutation();

  // Ensure data?.data is an array before using .map()
  const dataSource: HeroContentData[] =
    Array.isArray(data?.data) && data?.data.length > 0
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?.data.map((item: any) => ({
          key: item.id,
          title: item.title,
          subTitle: item.subTitle,
          description: item.description,
          heroImage: item.heroImage,
          isLive: item.isLive,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }))
      : []; // Fallback to an empty array if not an array

  const openModal = (record: HeroContentData) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  // Function to handle isLive toggle
  const toggleIsLive = async (record: HeroContentData) => {
    const updatedStatus = { isLive: !record.isLive };
    try {
      await updateIsLive({ id: record.key, data: updatedStatus }).unwrap();
      toast.success("Your content is updated!");
    } catch (error) {
      toast.error("Failed to update content status.");
      console.error("Error updating isLive:", error);
    }
  };

  // Function to delete hero content
  const handleDelete = async (id: string) => {
    try {
      await deleteHeroContent(id).unwrap();
      toast.success("Hero content deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete hero content.");
      console.error("Error deleting content:", error);
    }
  };

  const columns: ColumnsType<HeroContentData> = [
    {
      title: "Sl.",
      dataIndex: "key",
      key: "key",
      render: (_, __, index) => `${index + 1}.`,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Sub Title",
      dataIndex: "subTitle",
      key: "subTitle",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Hero Image",
      dataIndex: "heroImage",
      key: "heroImage",
      render: (text) => <img src={text} alt="Hero" width={50} height={50} />,
    },
    {
      title: "Is Live",
      dataIndex: "isLive",
      key: "isLive",
      render: (text) => (text ? "Yes" : "No"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            className="border-none"
            icon={<CiViewList size={30} />}
            onClick={() => openModal(record)}
          />
          <Button
            className="ml-2"
            type="primary"
            style={{
              backgroundColor: record.isLive ? "#F9AB7F" : "#F9AB7F",
            }}
            onClick={() => toggleIsLive(record)}
          >
            {record.isLive ? "Remove from Live" : "Set as Live"}
          </Button>
          <Button className="ml-2" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Table
        className="custom-table"
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 10,
          total: dataSource.length,
          showSizeChanger: true,
        }}
        bordered={false}
        scroll={{ x: "max-content" }}
      />

      {/* Ant Design Modal */}
      {selectedRecord && (
        <Modal
          title="Hero Content Details"
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <Table
            dataSource={[selectedRecord]}
            className="custom-table"
            columns={[
              {
                title: "Title",
                dataIndex: "title",
                key: "title",
              },
              {
                title: "Sub Title",
                dataIndex: "subTitle",
                key: "subTitle",
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description",
              },
              {
                title: "Hero Image",
                dataIndex: "heroImage",
                key: "heroImage",
                render: (text) => (
                  <img src={text} alt="Hero" width={100} height={100} />
                ),
              },
              {
                title: "Is Live",
                dataIndex: "isLive",
                key: "isLive",
                render: (text) => (text ? "Yes" : "No"),
              },
              {
                title: "Created At",
                dataIndex: "createdAt",
                key: "createdAt",
              },
              {
                title: "Updated At",
                dataIndex: "updatedAt",
                key: "updatedAt",
              },
            ]}
            pagination={false}
            bordered
            rowKey="key"
          />
        </Modal>
      )}
    </div>
  );
};

export default HeroContents;
