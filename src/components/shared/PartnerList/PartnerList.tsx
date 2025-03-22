"use client";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface OrderData {
  key: string;
  name: string;
  massage: string;
  email: string;
  phonenumber: string;
  partnershiptype: string;
}

const dataSource: OrderData[] = Array.from({ length: 10 }, (_, index) => ({
  key: `${index + 1}`,
  name: "Jenny Wilson",
  massage: "I’d love to explore See more",
  email: "demoemail123@example.com",
  phonenumber: "+ 123 456 789",
  partnershiptype: "Influencer Partner",
}));

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
    title: "Massage",
    dataIndex: "massage",
    key: "massage",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone number",
    dataIndex: "phonenumber",
    key: "phonenumber",
  },
  {
    title: "Partnership Type",
    dataIndex: "partnershiptype",
    key: "partnershiptype",
  },
];

export default function PartnerList() {
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
    </div>
  );
}
