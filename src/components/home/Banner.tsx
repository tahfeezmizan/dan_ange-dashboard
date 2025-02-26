"use client";

import React from "react";
import Image from "next/image";
import packIcon from "@/assets/pack.svg";
import { Flex, Progress } from "antd";
import bannerImg from "@/assets/car-img.svg";
import bgImg from "@/assets/bg-img.svg";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="container flex justify-between items-center gap-[25px]">
        {/* left side section */}

        <div>
          <p className="text-primary font-museomoderno text-2xl font-bold leading-[38px] capitalize mb-2">
            STEP INTO THE COLLECTIVE. <br /> SPARK THE CHANGE, MAKE a
            DIFFERENCE.
          </p>
          <h1 className="font-museomoderno text-[80px] font-semibold leading-[96px] uppercase mb-4 text-gray700">
            YOUR CHANCE <br /> STARTS HERE
          </h1>
          <p className="text-gray500 text-base font-extralight leading-[25px]">
            Enter the draw and support the Humpty Dumpty Foundation
          </p>
          <div className="mt-10 flex items-center gap-6 mb-[23px]">
            <button className="bg-gradient-to-r from-[#F9AB7F] via-[#F9AB7FCC] to-white uppercase text-base font-bold leading-[25px] rounded-[32px] text-gray400 px-8 py-4 flex gap-[10px]">
              <Image width={24} height={24} src={packIcon} alt="Pack Icon" />
              Buy A pack
            </button>
            <button className="border border-primary rounded-full px-8 py-4 font-museomoderno font-bold text-gray400 leading-[25px] uppercase">
              ABOUT OUR CHARITY PARTNER
            </button>
          </div>

          {/* entries close in active or deactive */}
          <div className="grid gap-6">
            <p className="text-gray700 font-museomoderno font-semibold text-2xl leading-[38px]">
              Entries close in:
            </p>
            {/* day to close this */}
            <div className="">
              <Flex gap="large" wrap className="flex gap-[56px]">
                {/* Days */}
                <div className="grid gap-2 text-center">
                  <Progress type="circle" percent={25} format={() => "05"} />
                  <p className="text-gray-700 font-museomoderno text-2xl">
                    Days
                  </p>
                </div>

                {/* Hours */}
                <div className="grid gap-2 text-center">
                  <Progress type="circle" percent={62.5} format={() => "15"} />
                  <p className="text-gray-700 font-museomoderno text-2xl">
                    Hours
                  </p>
                </div>

                {/* Minutes */}
                <div className="grid gap-2 text-center">
                  <Progress type="circle" percent={50} format={() => "30"} />
                  <p className="text-gray-700 font-museomoderno text-2xl">
                    Minutes
                  </p>
                </div>

                {/* Seconds */}
                <div className="grid gap-2 text-center">
                  <Progress type="circle" percent={75} format={() => "45"} />
                  <p className="text-gray-700 font-museomoderno text-2xl">
                    Seconds
                  </p>
                </div>
              </Flex>
            </div>
          </div>
        </div>

        {/* right side section */}
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            src={bannerImg}
            alt="Banner Image"
            className="object-cover w-[893px] h-[367px]"
          />
          <Image
            width={1000}
            height={1000}
            src={bgImg}
            alt="Banner Image"
            className="absolute top-0 bottom-0 right-0 w-[669px] h-[435px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
