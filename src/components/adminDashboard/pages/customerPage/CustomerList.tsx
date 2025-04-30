"use client";

import { Table, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserOutlined } from "@ant-design/icons";
import { useGetAllUserQuery } from "@/redux/feature/api/authApi";

interface UserData {
  key: string;
  name: string;
  email: string;
  phonenumber: string;
  profileImage: string;
}

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
    render: (_, record) =>
      record.profileImage ? (
        <Avatar src={record.profileImage} />
      ) : (
        <Avatar icon={<UserOutlined />} />
      ),
  },
];

export default function CustomerList() {
  const { data, isLoading, isError } = useGetAllUserQuery({});
  const users = data?.data || [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formattedData: UserData[] = users.map((user: any, index: number) => ({
    key: String(index + 1),
    name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
    email: user.email || "N/A",
    phonenumber: user.phoneNumber || "N/A",
    profileImage: user.userImage || "",
  }));

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (isError) {
    return <div>Failed to load users.</div>;
  }

  return (
    <div>
      <Table
        className="custom-table"
        dataSource={formattedData}
        columns={columns}
        pagination={{ pageSize: 10, showSizeChanger: true }}
        bordered={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}
