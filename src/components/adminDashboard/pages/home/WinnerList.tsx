/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { LuImage } from "react-icons/lu";
import {
  useDeleteWinnersMutation,
  useGetAllWinnersQuery,
  useUpdateWinnersMutation,
} from "@/redux/feature/api/winner/winnerApi";
import Loading, { ButtonLoading } from "@/components/shared/loading/Loading";
import { toast } from "react-toastify";
import Modal from "@/components/shared/modal/Modal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { IoClose } from "react-icons/io5";
import { BiSolidImage } from "react-icons/bi";

const WinnerList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWinner, setEditingWinner] = useState<any>(null);
  const { data, isLoading, refetch } = useGetAllWinnersQuery({});
  const winners = data?.data || [];

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    prizeName: "",
    winnerImage: null as File | null,
    prizeImage: null as File | null,
    existingWinnerImage: "",
    existingPrizeImage: "",
  });

  const [deleteWinner] = useDeleteWinnersMutation();
  const [updateWinner, { isLoading: isUpdating }] = useUpdateWinnersMutation();

  const openModal = (winner: any) => {
    setEditingWinner(winner);
    setFormData({
      id: winner?._id || "",
      name: winner?.name || "",
      description: winner?.description || "",
      prizeName: winner?.prizeName || "",
      winnerImage: null,
      prizeImage: null,
      existingWinnerImage: winner?.winnerImage || "",
      existingPrizeImage: winner?.prizeImage || "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingWinner(null);
    setIsModalOpen(false);
    setFormData({
      id: "",
      name: "",
      description: "",
      prizeName: "",
      winnerImage: null,
      prizeImage: null,
      existingWinnerImage: "",
      existingPrizeImage: "",
    });
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteWinner(id).unwrap();
      if (res.success) {
        toast.success("Winner removed successfully!");
        refetch();
      }
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to delete winner");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "winner" | "prize"
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "winner") {
        setFormData((prevData) => ({
          ...prevData,
          winnerImage: e.target.files ? e.target.files[0] : null,
          existingWinnerImage: "",
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          prizeImage: e.target.files ? e.target.files[0] : null,
          existingPrizeImage: "",
        }));
      }
    }
  };

  const handleRemoveImage = (type: "winner" | "prize") => {
    if (type === "winner") {
      setFormData((prevData) => ({
        ...prevData,
        winnerImage: null,
        existingWinnerImage: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        prizeImage: null,
        existingPrizeImage: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("id", formData.id);
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("prizeName", formData.prizeName);

    if (formData.winnerImage) {
      formDataToSubmit.append("winnerImage", formData.winnerImage);
    } else if (formData.existingWinnerImage) {
      formDataToSubmit.append(
        "existingWinnerImage",
        formData.existingWinnerImage
      );
    }

    if (formData.prizeImage) {
      formDataToSubmit.append("prizeImage", formData.prizeImage);
    } else if (formData.existingPrizeImage) {
      formDataToSubmit.append(
        "existingPrizeImage",
        formData.existingPrizeImage
      );
    }

    try {
      const response = await updateWinner(formDataToSubmit).unwrap();
      toast.success(response?.message || "Winner updated successfully!");
      refetch();
      closeModal();
    } catch (error: any) {
      const errorMessage = error.data?.message || "Failed to update winner";
      toast.error(errorMessage);
      console.error("API Error:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
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
        <tbody className="">
          {winners?.map((winner: any) => (
            <tr
              key={winner?._id}
              className="hover:bg-gray-50 text-sm font-light"
            >
              <td className="px-4 py-2">
                {winner?.winnerImage ? (
                  <Image
                    src={winner?.winnerImage}
                    alt={winner?.name}
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
              <td className="px-4 py-2 text-gray400">{winner?.name}</td>
              <td className="px-4 py-2 text-gray400">{winner?.description}</td>
              <td className="px-4 py-2 text-gray400">
                {winner?.prizeImage ? (
                  <Image
                    src={winner?.prizeImage}
                    alt={winner?.prizeName}
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
              <td className="px-4 py-2 text-gray400">{winner?.prizeName}</td>
              <td className="px-4 py-6 flex items-center space-x-4">
                <button onClick={() => openModal(winner)} className="">
                  <FaRegEdit className="w-5 h-5 text-gray300" />
                </button>
                <button onClick={() => handleDelete(winner?._id)} className="">
                  <GoTrash className="w-5 h-5 text-gray300" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingWinner ? "Edit Winner" : "Add Winner"}
      >
        <SectionTitle title={editingWinner ? "Edit Winner" : "Add Winner"} />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-start w-full gap-10">
            <div className="w-full flex flex-col gap-8 mt-6">
              {/* Winner Image */}
              <div className="w-full">
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  WINNER IMAGE :
                </label>
                <div className="relative w-full h-40 bg-gray-200/60 rounded-xl overflow-hidden flex items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "winner")}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {formData.winnerImage ? (
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src={URL.createObjectURL(formData.winnerImage)}
                        alt="Winner"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage("winner")}
                        className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                      >
                        <IoClose className="w-6 h-6" />
                      </button>
                    </div>
                  ) : formData.existingWinnerImage ? (
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src={formData.existingWinnerImage}
                        alt="Existing Winner"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage("winner")}
                        className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                      >
                        <IoClose className="w-6 h-6" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <BiSolidImage className="w-16 h-16" />
                      <span>No Image Selected</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Prize Image */}
              <div className="w-full">
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  PRIZE IMAGE :
                </label>
                <div className="relative w-full h-40 bg-gray-200/60 rounded-xl overflow-hidden flex items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "prize")}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {formData.prizeImage ? (
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src={URL.createObjectURL(formData.prizeImage)}
                        alt="Prize"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage("prize")}
                        className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                      >
                        <IoClose className="w-6 h-6" />
                      </button>
                    </div>
                  ) : formData.existingPrizeImage ? (
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src={formData.existingPrizeImage}
                        alt="Existing Prize"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage("prize")}
                        className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                      >
                        <IoClose className="w-6 h-6" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <BiSolidImage className="w-16 h-16" />
                      <span>No Image Selected</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5 mt-6">
              {/* Winner Name */}
              <div className="w-full">
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  WINNER NAME :
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                  placeholder="Enter winner's name"
                  required
                />
              </div>
              {/* Description */}
              <div className="w-full">
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  DESCRIPTION :
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg min-h-28"
                  placeholder="Enter description"
                  required
                />
              </div>
              {/* Prize Name */}
              <div className="w-full">
                <label className="block text-[#4E4E4E] text-base font-museomoderno font-semibold uppercase mb-3">
                  PRIZE NAME :
                </label>
                <input
                  type="text"
                  name="prizeName"
                  value={formData.prizeName}
                  onChange={handleInputChange}
                  className="mt-1 px-2 py-3 w-full bg-gray-200/60 rounded-lg"
                  placeholder="Enter prize name"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isUpdating}
              className="text-white text-sm md:text-base px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF] disabled:opacity-50"
            >
              {isUpdating ? (
                <ButtonLoading />
              ) : editingWinner ? (
                "Update Winner"
              ) : (
                "Add Winner"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default WinnerList;
