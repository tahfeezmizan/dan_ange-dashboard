"use client";

import React, { useState } from "react";
import SharedButton from "../shared/button/SharedButton";
import { FaChevronDown } from "react-icons/fa6";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    partnershipType: "Influencer Partner",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl  bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block font-semibold text-secondary font-museomoderno"
            >
              FIRST NAME :
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block font-semibold text-secondary font-museomoderno"
            >
              LAST NAME :
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block font-semibold text-secondary font-museomoderno"
            >
              COMPANY NAME :
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
              placeholder="Enter your company name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-secondary font-museomoderno"
            >
              EMAIL :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block font-semibold text-secondary font-museomoderno"
            >
              PHONE NUMBER :
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="partnershipType"
              className="block font-semibold text-secondary font-museomoderno"
            >
              PARTNERSHIP TYPE :
            </label>
            <div className="relative">
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md text-secondary pr-10 appearance-none focus:border-none placeholder:text-secondary"
              >
                <option value="Influencer Partner">Influencer Partner</option>
                <option value="Charity Partner">Charity Partner</option>
                <option value="Prize Partner">Prize Partner</option>
                <option value="Sponsor">Sponsor</option>
              </select>

              {/* Custom Icon for dropdown */}
              <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-semibold text-secondary font-museomoderno"
            >
              MESSAGE :
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full min-h-40 px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="mb-4 text-center">
            <SharedButton type="submit" text="SUBMIT" classes="w-full" />
          </div>
        </form>
      </div>
      <p className="mx-auto max-w-4xl text-center text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mt-4 font-museomoderno">
        View our <span className="underline"> Privacy Collection Notice</span>{" "}
        to learn how we manage your personal information collected through this
        inquiry form.
      </p>
    </div>
  );
};

export default PartnerForm;
