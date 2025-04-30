/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Table, Button } from "antd";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import Modal from "@/components/shared/modal/Modal";
import {
  useGetAllOrderDetailsQuery,
  useGetAllRaffleEntriesQuery,
} from "@/redux/feature/api/orderDetails/orderDetailsApi";

interface OrderData {
  key: string;
  name: string;
  country: string;
  email: string;
  totalPrice: string;
  quantity: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  cartItems?: {
    packs?: {
      id?: string;
      title?: string;
    };
    quantity?: number;
    totalPrice?: number;
  }[];
}

const OrderList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<OrderData | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const { data } = useGetAllOrderDetailsQuery({});
  const { data: raffle } = useGetAllRaffleEntriesQuery({
    ids: selectedOrderId ? [selectedOrderId] : [],
  });

  // Map API data to display in the table
  const dataSource: OrderData[] =
    data?.data?.map((item: any) => ({
      key: item.id,
      name: `${item.user?.firstName || ""} ${item.user?.lastName || ""}`.trim(),
      email: item.user?.email || "Not Available",
      country: "Not Available",
      totalPrice: item.totalPrice ? `$${item.totalPrice}` : "Not Available",
      quantity: item.quantity || 0,
      status: item.status || "Unknown",
      createdAt: item.createdAt || "Not Available",
      updatedAt: item.updatedAt || "Not Available",
      cartItems: item.cartItems,
    })) || [];

  const openModal = (record: OrderData) => {
    const fullRecord = data?.data?.find((item: any) => item.id === record.key);
    setSelectedRecord({
      ...record,
      cartItems: fullRecord?.cartItems,
    });
    setSelectedOrderId(record.key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
    setSelectedOrderId(null);
  };

  const columns: ColumnsType<OrderData> = [
    {
      title: "Sl.",
      dataIndex: "key",
      key: "key",
      render: (_, __, index) => `${index + 1}`,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          className="border-none"
          icon={<CiViewList size={30} />}
          onClick={() => openModal(record)}
        >
          Details
        </Button>
      ),
    },
  ];

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
        <Modal title="Order Details" isOpen={isModalOpen} onClose={closeModal}>
          {/* Raffle Entries Section */}
          <div style={{ marginTop: "24px" }}>
            {raffle?.data?.length ? (
              <Table
                dataSource={raffle.data}
                rowKey="raffleNumber"
                pagination={false}
                columns={[
                  {
                    title: "Raffle Number",
                    dataIndex: "raffleNumber",
                    key: "raffleNumber",
                  },
                  {
                    title: "Pack Title",
                    dataIndex: ["packs", "title"],
                    key: "packTitle",
                  },
                  {
                    title: "Description",
                    dataIndex: ["packs", "description"],
                    key: "description",
                  },
                  {
                    title: "Price",
                    dataIndex: ["packs", "price"],
                    key: "price",
                    render: (price) => `$${price}`,
                  },
                ]}
              />
            ) : (
              <p>No raffle entries found for this order</p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default OrderList;
