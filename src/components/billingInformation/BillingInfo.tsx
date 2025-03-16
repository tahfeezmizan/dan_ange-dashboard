import { FaChevronDown } from "react-icons/fa6";
import SharedButton from "../shared/button/SharedButton";

const BillingInfo = () => {
  return (
    <div className="flex-1 bg-[#F7F0E8] p-8 rounded-lg ">
      <form>
        {/* Full Name */}
        <div className="mb-6">
          <label
            htmlFor="fullName"
            className="block font-semibold text-secondary font-museomoderno"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="mt-2 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
          />
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block font-semibold text-secondary font-museomoderno"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="mt-2 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
          />
        </div>

        {/* Country */}
        <div className=" mb-6">
          <label
            htmlFor="country"
            className="block font-semibold text-secondary font-museomoderno"
          >
            Country:
          </label>
          <div className="relative">
            <select
              id="country"
              className="mt-1 block w-full px-4 py-3 bg-gray50 font-light rounded-md text-secondary pr-10 appearance-none focus:border-none placeholder:text-secondary"
            >
              <option>United States of America</option>
              <option>United States of America</option>
              <option>United States of America</option>
              <option>United States of America</option>
              <option>United States of America</option>
              {/* Add other countries as needed */}
            </select>

            {/* Custom Icon for dropdown */}
            <FaChevronDown className="absolute right-3 top-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* State and Zip Code */}
        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label
              htmlFor="state"
              className="block font-semibold text-secondary font-museomoderno"
            >
              State:
            </label>
            <input
              type="text"
              id="state"
              placeholder="-"
              className="mt-2 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="zipCode"
              className="block font-semibold text-secondary font-museomoderno"
            >
              Zip Code:
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="-"
              className="mt-2 block w-full px-4 py-3 bg-gray50 font-light rounded-md placeholder:text-secondary"
            />
          </div>
        </div>

        <SharedButton text="Pay $20.00" classes="w-full" />
      </form>
    </div>
  );
};

export default BillingInfo;
