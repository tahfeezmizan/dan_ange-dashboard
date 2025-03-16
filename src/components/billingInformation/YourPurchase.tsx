"use client";
import React, { useState } from "react";

const YourPurchase = () => {
  // Initialize the purchase items and donation
  const [items, setItems] = useState([
    { id: 1, name: "Essential pack", price: 2.0, quantity: 2 },
    { id: 2, name: "Elite pack", price: 8.0, quantity: 2 },
  ]);
  const [donation, setDonation] = useState(0); // Donation amount

  // Update item quantity
  const handleQuantityChange = (
    id: number,
    operation: "increase" | "decrease"
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                operation === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1 // Prevent going below 1
                  : item.quantity, // Don't decrease below 1
            }
          : item
      )
    );
  };

  // Update donation selection
  const handleDonationChange = (amount: number) => {
    setDonation(amount);
  };

  // Calculate subtotals and total
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + donation;

  return (
    <div>
      <div className="flex-1 bg-[#F7F0E8] p-8 rounded-lg shadow-lg text-secondary/80">
        <h3 className="text-secondary text-3xl font-semibold mb-6">
          YOUR PURCHASE -
        </h3>
        <div>
          <hr className="my-5" />
        </div>
        <div className="space-y-6">
          {/* Purchase Items */}
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="space-y-5">
                <h2 className="font-semibold text-lg text-secondary ">
                  {item.name}
                </h2>
                <div className="flex items-center gap-0.5">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    className="bg-white text-xl flex items-center justify-center h-10 px-4 py-2  rounded-md"
                  >
                    -
                  </button>
                  <span className="bg-white w-20 h-10 text-lg flex items-center justify-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    className="bg-white text-xl flex items-center justify-center h-10 px-4 py-2 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <span className="font-semibold">${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div>
            <hr className="my-5" />
          </div>
          {/* Charity Donation */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-between items-start gap-4">
              {/* Charity  */}
              <span className="font-semibold">
                I want to make a direct donation to charity
              </span>

              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="donation"
                  id="donation1"
                  checked={donation === 1}
                  onChange={() => handleDonationChange(1)}
                />
                $1
                <input
                  type="radio"
                  name="donation"
                  id="donation5"
                  checked={donation === 5}
                  onChange={() => handleDonationChange(5)}
                />
                $5
                <input
                  type="radio"
                  name="donation"
                  id="donation8"
                  checked={donation === 8}
                  onChange={() => handleDonationChange(8)}
                />
                $8
                <input
                  type="radio"
                  name="donation"
                  id="donation10"
                  checked={donation === 10}
                  onChange={() => handleDonationChange(10)}
                />
                $10
              </div>
            </div>
            <span className="font-semibold ">${donation.toFixed(2)}</span>
          </div>
          <div>
            <hr className="my-5" />
          </div>
          {/* Subtotal and Total */}
          <div className="space-y-4 mt-6">
            {/* Subtotal Section */}
            <div className="flex justify-between items-center font-semibold">
              <h2 className="text-2xl font-semibold">Subtotal</h2>

              <div>
                {/* Pack Total Section */}
                <div className="flex justify-between items-center gap-10 font-semibold ">
                  <span>Pack Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {/* Charity Section */}
                <div className="flex justify-between items-center gap-10 font-semibold ">
                  <span>Charity</span>
                  <span>${donation.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr className="my-5" />
          </div>

          <div className="flex justify-between items-center font-semibold mt-4 text-lg">
            <h2 className="text-2xl font-semibold">Total</h2>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPurchase;
