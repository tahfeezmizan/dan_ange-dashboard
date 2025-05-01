"use client";
import { Table } from "antd";

interface DataType {
  key: string;
  name: string;
  country: string;
  email: string;
  packName: string;
  amount: string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    name: "Jenny Wilson",
    country: "Bangladesh, Dhaka",
    email: "poolsideswim@gmail.com",
    packName: "Essential pack",
    amount: "$1",
  },
  {
    key: "2",
    name: "Jenny Wilson",
    country: "Bangladesh, Dhaka",
    email: "poolsideswim@gmail.com",
    packName: "Essential pack",
    amount: "$1",
  },
  {
    key: "3",
    name: "Jenny Wilson",
    country: "Bangladesh, Dhaka",
    email: "poolsideswim@gmail.com",
    packName: "Essential pack",
    amount: "$1",
  },
  {
    key: "4",
    name: "Jenny Wilson",
    country: "Bangladesh, Dhaka",
    email: "poolsideswim@gmail.com",
    packName: "Essential pack",
    amount: "$1",
  },
  {
    key: "5",
    name: "Jenny Wilson",
    country: "Bangladesh, Dhaka",
    email: "poolsideswim@gmail.com",
    packName: "Essential pack",
    amount: "$1",
  },
];

const columns = [
  {
    title: "Sl.",
    dataIndex: "key",
    key: "key",
    render: (text: string) => `0${text}.`,
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
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "",
    dataIndex: "",
    key: "",
  },
];

export default function OrderListTable() {
  return (
    <div className="overflow-x-auto">
      <Table
        className="custom-table"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}
