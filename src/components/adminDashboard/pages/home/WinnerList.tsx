"use client";

import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { LuImage } from "react-icons/lu";

const winnersData = [
  {
    id: 1,
    winnerImage: "",
    winnerName: "Jenny Wilson",
    description: "I never thought I'd win, but I did!",
    prizeImage: "",
    prizeName: "Lamborghini",
  },
  {
    id: 2,
    winnerImage: "",
    winnerName: "John Doe",
    description: "Winning feels amazing!",
    prizeImage: "",
    prizeName: "Tesla",
  },
  {
    id: 3,
    winnerImage: "",
    winnerName: "John Doe",
    description: "Winning feels amazing!",
    prizeImage: "",
    prizeName: "Tesla",
  },
  {
    id: 4,
    winnerImage: "",
    winnerName: "John Doe",
    description: "Winning feels amazing!",
    prizeImage: "",
    prizeName: "Tesla",
  },
  {
    id: 5,
    winnerImage: "",
    winnerName: "John Doe",
    description: "Winning feels amazing!",
    prizeImage: "",
    prizeName: "Tesla",
  },
];

const WinnerList = () => {
  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="p-10">
          <tr className="px-5 border-b text-left font-museomoderno text-gray500">
            <th className="px-4 py-5 text-gray400">Winner Image</th>
            <th className="px-4 py-5 text-gray400">Winner Name</th>
            <th className="px-4 py-5 text-gray400">Description</th>
            <th className="px-4 py-5 text-gray400">Prize Image</th>
            <th className="px-4 py-5 text-gray400">Prize Name</th>
            <th className="px-4 py-5 text-gray400">Action</th>
          </tr>
        </thead>
        <tbody className="py-10">
          {winnersData.map((winner) => (
            <tr key={winner.id} className=" hover:bg-gray-50">
              <td className="px-4 py-2">
                {winner.winnerImage ? (
                  <Image
                    src={winner.winnerImage}
                    alt={winner.winnerName}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-12 bg-gray-200/60 rounded-lg flex items-center justify-center text-white">
                    <LuImage className="w-6 h-6 text-gray-500/70" />
                  </div>
                )}
              </td>
              <td className="px-4 py-2 text-gray400">{winner.winnerName}</td>
              <td className="px-4 py-2 text-gray400">{winner.description}</td>
              <td className="px-4 py-2 text-gray400">
                {winner.winnerImage ? (
                  <Image
                    src={winner.prizeImage}
                    alt={winner.prizeName}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-12 bg-gray-200/60 rounded-lg flex items-center justify-center text-white">
                    <LuImage className="w-6 h-6 text-gray-500/70" />
                  </div>
                )}
              </td>
              <td className="px-4 py-2 text-gray400">{winner.prizeName}</td>
              <td className="px-4 py-6 flex items-center space-x-4">
                <button className="">
                  <FaRegEdit className="w-5 h-5 text-gray300" />
                </button>
                <button className="">
                  <GoTrash className="w-5 h-5 text-gray300" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WinnerList;
