"use client";

import SharedButton from "@/components/shared/button/SharedButton";
import { SectionHeader } from "@/components/shared/header/SectionHeader";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  font-museomoderno">
      <div className="bg-[#F7F0E8] shadow-md rounded-xl px-8 py-16 w-full max-w-md sm:max-w-3xl">
        <h2 className="text-2xl sm:text-3xl xl:text-[56px] font-semibold text-center mb-6 text-gray-900"></h2>
        <SectionHeader title="Welcome Back" />
        <form onSubmit={handleSubmit} className="space-y-8">
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
            <a
              href="#"
              className="mt-2 text-sm text-secondary text-right font-poppins font-light hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <SharedButton type="submit" text="LOG IN" />
        </form>

        {/* Signup Link */}
        <p className="text-center text-base font-semibold mt-8 text-secondary">
          Don’t have an account?{" "}
          <Link href="/signup" className="font-semibold hover:underline">
            SIGN UP NOW
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
