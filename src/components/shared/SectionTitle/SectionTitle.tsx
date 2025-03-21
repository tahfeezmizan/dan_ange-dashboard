import Link from "next/link";
import React from "react";

type SectionTitleProps = {
  title: string;
  buttonTitle: string;
  link: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, buttonTitle, link }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-semibold font-museomoderno">{title}</h1>
      <Link href={link}>
        <button className="text-base px-8 py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
          {buttonTitle}
        </button>
      </Link>
    </div>
  );
};

export default SectionTitle;
