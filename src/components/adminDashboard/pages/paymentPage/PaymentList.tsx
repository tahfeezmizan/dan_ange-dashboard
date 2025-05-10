/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Loading from "@/components/shared/loading/Loading";
import { useGetAllPaymentsQuery } from "@/redux/feature/api/payment/paymentApi";
import React from "react";

const PaymentList = () => {
  const { data, isLoading } = useGetAllPaymentsQuery({});
  const paymentList = data?.data?.result; // Extract the list of payments

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="border-b font-museomoderno">
            <th className="px-6 py-5 text-left font-semibold">Sl.</th>
            <th className="px-6 py-5 text-left font-semibold">Payment ID</th>
            <th className="px-6 py-5 text-left font-semibold">User</th>
            <th className="px-6 py-5 text-left font-semibold">Email</th>
            <th className="px-6 py-5 text-left font-semibold">Amount</th>
            <th className="px-6 py-5 text-left font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentList?.map((payment: any, index: number) => (
            <tr key={payment.paymentId} className="font-light text-sm">
              <td className="px-6 py-4">{index + 1}</td> {/* Serial number */}
              <td className="px-6 py-4">{payment.paymentId}</td>
              <td className="px-6 py-4">
                {`${payment.orderDetails.user.firstName} ${payment.orderDetails.user.lastName}`}
              </td>
              <td className="px-6 py-4">{payment.orderDetails.user.email}</td>
              {/* Payment Amount divided by 100 */}
              <td className="px-6 py-4">
                $
                {payment.amount
                  ? (payment.amount / 100).toFixed(2)
                  : "Not Available"}
              </td>
              {/* Format Date */}
              <td className="px-6 py-4">
                {new Date(payment.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
