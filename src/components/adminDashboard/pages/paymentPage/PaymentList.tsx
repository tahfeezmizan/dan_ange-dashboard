"use client";

import React from "react";

const paymentData = [
  {
    id: 1,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 2,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 3,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 4,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 5,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 6,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 7,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 8,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 9,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
  {
    id: 10,
    payDate: "25/02/2025",
    name: "Jenny Wilson",
    country: "USA",
    transactionId: "#56845fgdoijgsd",
  },
];

const PaymentList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="">
          <tr className="border-b font-museomoderno">
            <th className="px-6 py-5 text-left font-semibold">Sl.</th>
            <th className="px-6 py-5 text-left font-semibold">Pay Date</th>
            <th className="px-6 py-5 text-left font-semibold">Name</th>
            <th className="px-6 py-5 text-left font-semibold">Country</th>
            <th className="px-6 py-5 text-left font-semibold">
              Transaction ID
            </th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment) => (
            <tr key={payment.id} className="font-light">
              <td className="px-6 py-4">{payment.id}</td>
              <td className="px-6 py-4">{payment.payDate}</td>
              <td className="px-6 py-4">{payment.name}</td>
              <td className="px-6 py-4">{payment.country}</td>
              <td className="px-6 py-4">{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
