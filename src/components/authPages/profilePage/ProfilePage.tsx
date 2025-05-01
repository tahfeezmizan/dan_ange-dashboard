"use client";

import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 font-museomoderno">
      {/* Profile Header */}
      <h1 className="text-center text-4xl md:text-5xl xl:text-6xl 2xl:text-[80px] font-semibold text-secondary mb-10">
        Profile
      </h1>

      {/* User Info Section */}
      <div className="border rounded-xl px-8 py-8 w-full">
        <div className="flex items-center space-x-4">
          <FaUserCircle size={90} className="text-primary/50" />
          <div>
            <h2 className="text-2xl font-semibold">David Reynolds</h2>
            <p className="text-sm text-gray-500">randomuser123@example.com</p>
          </div>
        </div>

        {/* User Info Inputs */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-8">
            <label className="w-40 text-sm font-semibold text-gray-700">
              FIRST NAME :
            </label>
            <input
              type="text"
              value="David"
              className="w-1/2 px-4 py-2.5 mt-1 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-8">
            <label className="w-40 text-sm font-semibold text-gray-700">
              LAST NAME :
            </label>
            <input
              type="text"
              value="Reynolds"
              className="w-1/2 px-4 py-2.5 mt-1 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-8">
            <label className="w-40 text-sm font-semibold text-gray-700">
              EMAIL ADDRESS :
            </label>
            <input
              type="email"
              value="randomuser123@example.com"
              className="w-1/2 px-4 py-2.5 mt-1 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-8">
            <label className="w-40 text-sm font-semibold text-gray-700">
              PHONE NUMBER :
            </label>
            <input
              type="text"
              value="+123 456 789"
              className="w-1/2 px-4 py-2.5 mt-1 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Purchase & Draw Info Section */}
      <div className="border rounded-xl px-8 py-8 w-full mt-10 bg-white shadow-sm text-base">
        {/* Purchase Info */}
        <div className="flex flex-col md:flex-row border-b py-4 w-full">
          <p className="text-primary font-semibold w-1/2">Your purchase :</p>
          <p className="font-bold text-secondary w-full md:w-1/2">
            2 × Essential pack & 2 × Elite pack
          </p>
        </div>

        {/* Donation */}
        <div className="flex flex-col md:flex-row border-b py-4 w-full">
          <p className="font-semibold w-full md:w-1/2">
            Your direct donation to charity:
          </p>
          <p className="text-secondary font-medium w-full md:w-1/2">$10</p>
        </div>

        {/* Entry Numbers */}
        <div className="flex flex-col md:flex-row border-b py-4 w-full">
          <p className="font-semibold w-full md:w-1/2">
            Your Entry Number(s) :
          </p>
          <p className="text-primary mt-1 w-full md:w-1/2 font-medium">
            BZ794589 | BZ756469 <br /> BZ7589 | BZ74586
          </p>
        </div>

        {/* Draw Date */}
        <div className="flex flex-col md:flex-row border-b py-4 w-full">
          <p className="font-semibold w-full md:w-1/2">Draw date :</p>
          <p className="text-primary w-full md:w-1/2 font-medium">
            23 June 2025
          </p>
        </div>

        {/* Draw Number */}
        <div className="flex flex-col md:flex-row border-b py-4 w-full">
          <p className="font-semibold w-full md:w-1/2">Draw number :</p>
          <p className="text-primary w-full md:w-1/2 font-medium">
            P5896A71483
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row border-b py-4 w-full">
          <p className="font-semibold w-full md:w-1/2">
            See draw social links :
          </p>
          <a
            href="https://sociallink.com"
            className="text-primary underline w-full md:w-1/2 font-medium"
          >
            https://sociallink.com
          </a>
        </div>

        {/* Payment ID */}
        <div className="flex py-4 gap-4">
          <p className="font-semibold">Payment ID :</p>
          <p className="text-secondary font-semibold">8459631495</p>
        </div>

        {/* Date & Time */}
        <div className="flex pt-3 gap-4">
          <p className="font-semibold">Date and Time :</p>
          <p className="text-secondary font-semibold">20 Feb 2025 11.55pm</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
