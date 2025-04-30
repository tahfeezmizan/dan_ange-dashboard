"use client";
import { useGetAllPartnerFormInfoQuery } from "@/redux/feature/api/partner/partnerApi";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface PartnerData {
  id: string;
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  phoneNumber: string;
  partnershipType: string;
}

export default function PartnerList() {
  const { data } = useGetAllPartnerFormInfoQuery({});
  const partner = data?.data;

  // Define the columns structure
  const columns: ColumnsType<PartnerData> = [
    {
      title: "Sl.",
      dataIndex: "key",
      key: "key",
      render: (text, record, index) => index + 1,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Partnership Type",
      dataIndex: "partnershipType",
      key: "partnershipType",
    },
  ];

  // Convert API data to match the Table dataSource structure
  const dataSource = partner?.map((item: PartnerData) => ({
    key: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    message: item.message,
    email: item.email,
    phoneNumber: item.phoneNumber,
    partnershipType: item.partnershipType,
  }));

  return (
    <div>
      <Table
        className="custom-table"
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 10,
          total: partner?.length,
          showSizeChanger: true,
        }}
        bordered={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}
