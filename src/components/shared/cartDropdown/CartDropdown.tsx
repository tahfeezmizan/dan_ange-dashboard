import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SharedButton from "../button/SharedButton";

const CartDropdown = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Essential Pack", price: 2, quantity: 2 },
    { id: 2, name: "Elite Pack", price: 4, quantity: 2 },
  ]);

  const handleQuantityChange = (
    id: number,
    operation: "increase" | "decrease"
  ) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              operation === "increase" ? item.quantity + 1 : item.quantity - 1,
          }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="absolute top-14 md:top-20 lg:top-24 xl:top-24 right-10 md:right-16 lg:right-16 xl:right-32 2xl:right-52 mt-2 bg-[#F7F0E8] text-black min-w-80 shadow-md rounded-lg z-10 space-y-10 p-10 sm:right-10">
      <h3 className="text-2xl font-semibold mb-4 text-primary underline mx-auto text-center">
        My cart
      </h3>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between items-center gap-4 mb-4"
        >
          {/* name & delete  */}
          <div className="flex items-center text-secondary gap-4">
            <span className="text-2xl font-semibold"> {item.name}</span>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-secondary bg-white p-1 rounded-full text-lg"
            >
              <HiOutlineTrash className="text-2xl" />
            </button>
          </div>

          <p className="text-2xl font-semibold"> ${item.price}</p>
          <div className="flex items-center gap-0.5">
            {/* Decrease Button */}
            <button
              onClick={() => handleQuantityChange(item.id, "decrease")}
              className="bg-white w-16 h-10 text-lg font-semibold px-3 py-2  rounded"
            >
              -
            </button>

            {/* Quantity Display */}
            <span className="bg-white h-10 text-lg font-semibold w-10 flex items-center justify-center  rounded">
              {item.quantity}
            </span>

            {/* Increase Button */}
            <button
              onClick={() => handleQuantityChange(item.id, "increase")}
              className="bg-white w-16 h-10 text-lg font-semibold px-3 py-2  rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <div className="flex justify-center items-center gap-6 text-2xl font-semibold text-secondary">
          <span>TOTAL:</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="mt-10">
          <SharedButton text="check out" />
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
