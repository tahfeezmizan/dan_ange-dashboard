"use client";
import { Table, Button, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
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
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">View Details</Menu.Item>
            <Menu.Item key="2">Edit</Menu.Item>
            <Menu.Item key="3">Delete</Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <Button icon={<EllipsisOutlined />} shape="circle" />
      </Dropdown>
    ),
  },
];

const OrderList = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold font-museomoderno mb-8">
        Order List
      </h2>
      <Table
        className="custom-table"
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10, total: 286, showSizeChanger: true }}
        bordered={false}
      />
    </div>
  );
};

export default OrderList;
