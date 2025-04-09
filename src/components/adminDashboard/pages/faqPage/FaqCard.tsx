"use client";

import { Card } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const data = [
  {
    question: "How do I participate in a prize draw?",
    answer:
      "Participating is easy! Simply buy a ticket for the prize you’re interested in. Each ticket gives you a chance to win in the draw. The more tickets you buy, the higher your chances!",
  },
  {
    question: "How do I participate in a prize draw?",
    answer:
      "Participating is easy! Simply buy a ticket for the prize you’re interested in. Each ticket gives you a chance to win in the draw. The more tickets you buy, the higher your chances!",
  },
  {
    question: "How do I participate in a prize draw?",
    answer:
      "Participating is easy! Simply buy a ticket for the prize you’re interested in. Each ticket gives you a chance to win in the draw. The more tickets you buy, the higher your chances!",
  },
];

const FaqCard = () => {
  return (
    <div className="flex flex-col gap-6 ">
      {data.map((item, index) => (
        <Card key={index} className="bg-[#F7F0E8] p-1">
          <div className="flex items-end justify-end text-lg gap-2 -mb-5">
            <FiEdit />
            <RiDeleteBinLine />
          </div>
          <h3 className="text-2xl font-museomoderno font-bold text-gray-900 mb-2">
            {item?.question}
          </h3>
          <p className="text-base font-poppins font-light text-gray-700 leading-relaxed">
            {item?.answer}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default FaqCard;
