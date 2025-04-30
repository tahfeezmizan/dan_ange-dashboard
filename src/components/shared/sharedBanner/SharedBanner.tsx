"use client";

import React from "react";
import bg from "@/assets/section-top.png";

interface SharedBannerProps {
  title: string;
  breadcrumb: string | string[];
  children?: React.ReactNode;
}

const SharedBanner: React.FC<SharedBannerProps> = ({
  title,
  breadcrumb,
  children,
}) => {
  // If breadcrumb is an array, map it with arrows; else display the single breadcrumb
  const renderBreadcrumb = () => {
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <span key={index} className="text-black">
          {item}
          {index < breadcrumb.length - 1 && " ➝ "}
        </span>
      ));
    } else {
      return <span className="text-black">{breadcrumb}</span>;
    }
  };
  return (
    <div className="relative font-museomoderno">
      {/* Background Section */}
      <div
        className="relative w-full h-[250px] md:h-[320px] lg:h-[350px] xl:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title & Breadcrumb */}
        <div className="container mx-auto px-5 flex flex-col gap-6 xl:gap-8 h-24">
          <h1 className="text-black text-5xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold">
            {title}
          </h1>
          <p className="text-black/60">
            <span className="text-black">Home</span> ➝ {renderBreadcrumb()}
          </p>
        </div>
      </div>

      {/* Children Content */}
      <div className="relative w-full px-5">
        <div
          className="container bg-white rounded-xl md:p-6 xl:p-10 mx-auto xl:max-w-6xl lg:max-w-[900px] xl:min-w-[1000px]
  lg:absolute lg:-top-16 xl:-top-20 lg:left-1/2 lg:-translate-x-1/2 "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;
