"use client";

import React from "react";
import Image from "next/image";
import packIcon from "@/assets/pack.svg";
import { Flex, Progress } from "antd";
import bannerImg from "@/assets/car-img.svg";
import bgImg from "@/assets/home/banner-image-bg.svg";
import bannerGradient from "@/assets/home/banner-gradient.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[180vh] sm:min-h-[160vh] lg:min-h-[180vh] xl:min-h-[130vh] mt-10 xl:mt-20"
    >
      <div className="container flex flex-col-reverse xl:flex-row items-center justify-between mx-auto gap-10 lg:gap-16">
        {/* Left Side Section */}
        <div className="w-full xl:w-2/5 text-center xl:text-left">
          <p className="text-primary font-museomoderno text-lg md:text-xl font-bold leading-[30px] capitalize mb-2">
            STEP INTO THE COLLECTIVE. <br /> SPARK THE CHANGE, MAKE A
            DIFFERENCE.
          </p>
          <h1 className="font-museomoderno text-3xl md:text-5xl lg:text-[40px] 2xl:text-[80px] font-semibold leading-[1.2] uppercase mb-4 text-black">
            YOUR CHANCE <br /> STARTS HERE
          </h1>
          <p className="text-base md:text-lg font-light leading-[25px]">
            Enter the draw and support the Humpty Dumpty Foundation
          </p>
          <div className="mt-6 md:mt-10 flex items-center xl:items-start justify-center xl:justify-start gap-4 md:gap-6 ">
            <button className="bg-gradient-to-r from-[#F9AB7F] via-[#F9AB7FCC] to-[#F9AB7FCC]/20 uppercase text-xs md:text-sm 2xl:text-base font-bold leading-[25px] rounded-[32px] text-gray400 px-4 md:px-6 2xl:px-8 py-2 md:py-3 2xl:py-4 flex gap-2 items-center w-auto">
              <Image
                width={24}
                height={24}
                src={packIcon}
                alt="Pack Icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              Buy A Pack
            </button>
            <button className="border border-primary rounded-full text-xs md:text-sm 2xl:text-base px-4 md:px-6 2xl:px-8 py-2 md:py-3 2xl:py-4 font-museomoderno font-bold text-gray400 uppercase w-auto">
              ABOUT OUR CHARITY PARTNER
            </button>
          </div>

          {/* Entries Countdown */}
          <div className="flex flex-col items-center 2xl:items-start gap-6 mt-8">
            <p className="font-museomoderno font-semibold text-lg md:text-2xl leading-[38px]">
              Entries close in:
            </p>
            <Flex
              gap="large"
              wrap
              className="flex items-center justify-center gap-10 2xl:gap-[56px]"
            >
              {/* Days */}
              <div className="text-center">
                <Progress
                  type="circle"
                  percent={25}
                  format={() => (
                    <span className="font-museomoderno text-2xl font-semibold">
                      05
                    </span>
                  )}
                  size={100}
                  strokeWidth={8}
                  strokeLinecap="square"
                />
                <p className="font-museomoderno text-lg lg:text-xl xl:text-2xl">
                  Days
                </p>
              </div>

              {/* Hours */}
              <div className="grid gap-2 text-center">
                <Progress
                  type="circle"
                  percent={62.5}
                  format={() => (
                    <span className="font-museomoderno text-2xl font-semibold">
                      15
                    </span>
                  )}
                  size={100}
                  strokeWidth={8}
                  strokeLinecap="square"
                />
                <p className="font-museomoderno text-lg lg:text-xl xl:text-2xl">
                  Hours
                </p>
              </div>

              {/* Minutes */}
              <div className="grid gap-2 text-center">
                <Progress
                  type="circle"
                  percent={50}
                  format={() => (
                    <span className="font-museomoderno text-2xl font-semibold">
                      30
                    </span>
                  )}
                  size={100}
                  strokeWidth={8}
                  strokeLinecap="square"
                />
                <p className="font-museomoderno text-lg lg:text-xl xl:text-2xl">
                  Minutes
                </p>
              </div>

              {/* Seconds */}
              <div className="grid gap-2 text-center">
                <Progress
                  type="circle"
                  percent={75}
                  format={() => (
                    <span className="font-museomoderno text-2xl font-semibold">
                      45
                    </span>
                  )}
                  size={100}
                  strokeWidth={8}
                  strokeLinecap="square"
                />
                <p className="font-museomoderno text-lg lg:text-xl xl:text-2xl">
                  Seconds
                </p>
              </div>
            </Flex>
          </div>
        </div>

        {/* Right Side (Car Image) */}
        <div className="w-full xl:w-3/5 flex justify-center">
          <div
            className="relative flex items-center justify-center overflow-hidden w-full h-[250px] md:h-[400px] lg:h-[500px]"
            style={{
              backgroundImage: `url(${bgImg.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
            }}
          >
            {/* Car Image - Independent Scaling */}
            <Image
              width={1000}
              height={1000}
              src={bannerImg}
              alt="Car Image"
              className="relative max-w-[80%] md:max-w-[100%] lg:max-w-[110%] xl:max-w-[108%] 2xl:max-w-[150%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
