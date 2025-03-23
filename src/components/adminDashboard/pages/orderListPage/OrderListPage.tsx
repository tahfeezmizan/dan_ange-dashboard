"use client";
import { Table, Button } from "antd";
import { CiViewList } from "react-icons/ci";
import type { ColumnsType } from "antd/es/table";

interface OrderData {
  key: string;
  name: string;
  country: string;
  email: string;
  packName: string;
  donated: string;
}

const dataSource: OrderData[] = Array.from({ length: 10 }, (_, index) => ({
  key: `${index + 1}`,
  name: "Jenny Wilson",
  country: "Bangladesh, Dhaka",
  email: "demoemail123@example.com",
  packName: "Essential pack",
  donated: "$10",
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
    render: () => (
      <Button className="border-none" icon={<CiViewList size={30} />} />
    ),
  },
];

const OrderList = () => {
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
};

export default OrderList;
