"use client";

import SharedButton from "@/components/shared/button/SharedButton";
import { useLoginMutation } from "@/redux/feature/api/authApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginUser] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    try {
      const res = await loginUser(formData).unwrap();

      if (res.success) {
        //dispatch(setUser(res.data));
        localStorage.setItem("accessToken", res.data.accessToken);
        alert(res.message);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  font-museomoderno">
      <div className="px-8 py-16 w-full max-w-md sm:max-w-2xl">
        <div className="text-center mb-10">
          <h3 className="text-3xl leading-loose uppercase font-semibold font-museomoderno">
            Hi, Wecome Back! 👋
          </h3>
          <p className="font-poppins font-base font-light">
            Please enter your email and password below!
          </p>
        </div>
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
              className="w-full px-4 py-3 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
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
                className="w-full px-4 py-3 rounded-lg bg-gray50 focus:ring-2 focus:ring-primary focus:outline-none font-poppins"
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
          <SharedButton type="submit" classes="w-full" text="LOG IN" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
