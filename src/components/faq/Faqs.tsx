"use client";

import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const faqItems = [
  {
    key: "1",
    question: "What is Chance Collective?",
    answer:
      "Collective is a platform where digital products meet social impact. Every purchase gives you access to exclusive digital content, with a portion of proceeds supporting charitable causes. And from time to time, we run exciting promotions where you can win incredible prizes—making every purchase an opportunity to give back and, occasionally, get lucky too!",
  },
  {
    key: "2",
    question: "How do I enter a giveaway?",
    answer: "Simply purchase a pack and you’ll be automatically entered!",
  },
  {
    key: "3",
    question: "Who can participate in Chance Collective promotions?",
    answer: "Anyone above 18 years old can participate.",
  },
  {
    key: "4",
    question: "How are winners selected?",
    answer: "Winners are selected randomly through a fair draw system.",
  },
  {
    key: "5",
    question: "Is my personal information safe with Chance Collective?",
    answer: "Yes, we value your privacy and follow strict security measures.",
  },
  {
    key: "6",
    question: "Can I opt-out of marketing communications?",
    answer: "Yes, you can opt out anytime from your account settings.",
  },
  {
    key: "7",
    question: "Are there any fees to participate?",
    answer: "No hidden fees! The only cost is the pack purchase.",
  },
];

const Faqs = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>(["1"]); // Track open panels

  const handleCollapseChange = (keys: string | string[]) => {
    setActiveKeys(Array.isArray(keys) ? keys : [keys]);
  };

  const faqData: CollapseProps["items"] = faqItems.map((item) => ({
    key: item.key,
    label: (
      <div
        className={`flex items-center justify-between w-full text-left p-4 rounded-lg transition-all duration-300 ${
          activeKeys.includes(item.key)
            ? "bg-[#2E2C38] text-white"
            : "bg-[#F7F0E8] text-black"
        }`}
      >
        <span className="font-museomoderno text-xl font-semibold">
          {item.question}
        </span>
      </div>
    ),
    children: (
      <div
        className={`bg-[#2E2C38] font-light text-base text-gray100 ${
          activeKeys.includes(item.key) ? "p-4" : "p-0"
        }`}
      >
        <p>{item.answer}</p>
      </div>
    ),
    className: `border-none overflow-hidden rounded-lg transition-all duration-300 ${
      activeKeys.includes(item.key) ? "bg-[#2E2C38]" : "bg-[#F7F0E8]"
    }`,
  }));

  return (
    <div className="mx-5 max-w-4xl lg:mx-auto ">
      <Collapse
        items={faqData}
        activeKey={activeKeys}
        onChange={handleCollapseChange}
        className="border-none"
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <DownOutlined
            className={`transition-transform ${
              isActive ? "rotate-180 text-white" : "text-white"
            }`}
          />
        )}
      />
    </div>
  );
};

export default Faqs;
