import React from "react";
import Link from "next/link";

type SectionTitleProps = {
  title: string;
  buttonTitle?: string;
  link?: string;
  onClick?: () => void;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  buttonTitle,
  link,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl md:text-3xl font-semibold font-museomoderno">
        {title}
      </h1>
      
      {/* Conditionally render the button if buttonTitle is provided */}
      {buttonTitle && (
        <div>
          {link ? (
            <Link href={link}>
              <button className="text-gray400 text-sm md:text-base px-3 md:px-8 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]">
                {buttonTitle}
              </button>
            </Link>
          ) : (
            <button
              onClick={onClick} // If onClick is provided, it will trigger the modal or any other function
              className="text-gray400 text-sm md:text-base px-3 md:px-8 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
            >
              {buttonTitle}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
