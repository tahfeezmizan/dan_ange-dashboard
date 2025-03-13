"use client";

import SharedButton from "@/components/shared/button/SharedButton";
import { SectionHeader } from "@/components/shared/header/SectionHeader";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "confirmPassword") {
      setError(""); // Clear error when typing
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if Confirm Password matches
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Log only the password
    console.log("formData:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-28 mb-60  font-museomoderno">
      <div className="bg-[#F7F0E8] shadow-md rounded-xl px-8 py-16 w-full max-w-md sm:max-w-3xl">
        <SectionHeader title="Create an Account" />

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Name Field */}
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              First Name :
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
              required
            />
          </div>

          {/* Last Name Field */}
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              Last Name :
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
              required
            />
          </div>

          {/* Country Field */}
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              Country :
            </label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              EMAIL :
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              PHONE NUMBER :
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              PASSWORD :
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
                required
              />
              {/* Password Toggle Button */}
              <button
                type="button"
                className="absolute right-4 top-2.5 text-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              CONFIRM PASSWORD :
            </label>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
                required
              />
              {/* Confirm Password Toggle Button */}
              <button
                type="button"
                className="absolute right-4 top-2.5 text-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Submit Button */}
          <SharedButton type="submit" text="SIGN UP" />
        </form>

        {/* Login Link */}
        <p className="text-center text-base font-semibold mt-8 text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            LOG IN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
