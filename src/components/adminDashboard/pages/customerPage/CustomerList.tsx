"use client";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserOutlined } from "@ant-design/icons";

interface UserData {
  key: string;
  name: string;
  country: string;
  email: string;
  phonenumber: string;
  profileImage: string; // Just a placeholder, we’ll show a button/icon
}

const dataSource: UserData[] = Array.from({ length: 20 }, (_, index) => ({
  key: `${index + 1}`,
  name: "Jenny Wilson",
  country: "Bangladesh, Dhaka",
  email: "demoemail123@example.com",
  phonenumber: "+123 456 789",
  profileImage: "", // Placeholder, not used directly
}));

const columns: ColumnsType<UserData> = [
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
    title: "Phone number",
    dataIndex: "phonenumber",
    key: "phonenumber",
  },
  {
    title: "Profile Image",
    key: "profileImage",
    render: () => <Button icon={<UserOutlined />} shape="circle" />,
  },
];

export default function CustomerList() {
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
