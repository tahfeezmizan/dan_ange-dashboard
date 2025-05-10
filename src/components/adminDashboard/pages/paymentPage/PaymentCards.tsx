"use client";

import React from "react";
import wallet from "@/assets/wallet.png";
import note from "@/assets/note.png";
import Image from "next/image";
import { useGetPaymentStatesQuery } from "@/redux/feature/api/payment/paymentApi";
import Loading from "@/components/shared/loading/Loading";

const PaymentCards = () => {
  const { data, isLoading } = useGetPaymentStatesQuery({});
  const payment = data?.data;
  console.log(payment);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex gap-12">
      {/* Total Amount Card */}
      <div className="flex items-center justify-between bg-[#F7F0E8] px-10 py-8 rounded-2xl w-full font-museomoderno">
        <div className="space-y-2">
          <h3 className="text-lg text-gray400">Total Amount</h3>

          <p className="text-3xl font-bold text-gray-900">
            $
            {payment?.totalSell ? (payment.totalSell / 100).toFixed(2) : "0.00"}
          </p>
        </div>
        <Image
          src={wallet}
          alt="wallet"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      </div>

      {/* Total Pack Order Card */}
      <div className="flex items-center justify-between bg-[#F7F0E8] px-10 py-8 rounded-2xl w-full font-museomoderno">
        <div className="space-y-2">
          <h3 className="text-lg text-gray400">Total Pack Order</h3>
          <p className="text-3xl font-bold text-gray-900">
            {payment?.totalOrdered}
          </p>
        </div>
        <Image
          src={note}
          alt="note"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default PaymentCards;
