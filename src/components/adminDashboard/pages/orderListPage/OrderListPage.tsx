"use client";
import { Table, Button, Modal } from "antd";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";

interface OrderData {
  key: string;
  name: string;
  country: string;
  email: string;
  packName: string;
  donated: string;
  entryNumber: string;
  purchaseDate: string;
}

const dataSource: OrderData[] = Array.from({ length: 10 }, (_, index) => ({
  key: `${index + 1}`,
  name: "Jenny Wilson",
  country: "Bangladesh, Dhaka",
  email: "demoemail123@example.com",
  packName: "Essential pack",
  donated: "$10",
  entryNumber: `BZT589${index + 1}`,
  purchaseDate: "20 Feb 2025, 11:55pm",
}));

const OrderList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<OrderData | null>(null);

  const openModal = (record: OrderData) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const columns: ColumnsType<OrderData> = [
    {
      title: "Sl.",
      dataIndex: "key",
      key: "key",
      render: (text) => `0${text}.`,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Pack name",
      dataIndex: "packName",
      key: "packName",
    },
    {
      title: "Donated",
      dataIndex: "donated",
      key: "donated",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          className="border-none"
          icon={<CiViewList size={30} />}
          onClick={() => openModal(record)} // Open modal with the selected record
        />
      ),
    },
  ];

  return (
    <div>
      <Table
        className="custom-table"
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10, total: 286, showSizeChanger: true }}
        bordered={false}
        scroll={{ x: "max-content" }}
      />

      {/* Ant Design Modal */}
      {selectedRecord && (
        <Modal
          title="Order Details"
          visible={isModalOpen}
          onCancel={closeModal}
          footer={null} // Remove footer for custom content
          width={800} // You can adjust the width as needed
        >
          <Table
            dataSource={[selectedRecord]}
            className="custom-table"
            columns={[
              {
                title: "Sl.",
                dataIndex: "key",
                key: "key",
                render: (text) => `0${text}.`,
              },
              {
                title: "Pack Name",
                dataIndex: "packName",
                key: "packName",
              },
              {
                title: "Entry Number",
                dataIndex: "entryNumber",
                key: "entryNumber",
              },
              {
                title: "Donated",
                dataIndex: "donated",
                key: "donated",
              },
              {
                title: "Purchase Date",
                dataIndex: "purchaseDate",
                key: "purchaseDate",
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

export default OrderList;
