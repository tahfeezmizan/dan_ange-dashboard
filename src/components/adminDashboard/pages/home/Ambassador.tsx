"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Modal from "@/components/shared/modal/Modal"; // Import Modal component
import { IoClose } from "react-icons/io5";

const videos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/ppR_QhxqgEE?si=W0nAq7bXKZoxydpQ",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/ppR_QhxqgEE?si=W0nAq7bXKZoxydpQ",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/ppR_QhxqgEE?si=W0nAq7bXKZoxydpQ",
  },
];

const Ambassador = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
  const [videoFile, setVideoFile] = useState<File | null>(null); // State for uploaded video

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]); // Set the selected file
    }
  };

  const handleRemoveVideo = () => {
    setVideoFile(null); // Remove the selected video
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoFile) {
      // Handle the video file upload logic here
      console.log("Submitting video:", videoFile);
      // Close the modal after submission
      closeModal();
    } else {
      console.log("No video selected");
    }
  };

  return (
    <div>
      <SectionTitle
        title="My Section"
        buttonTitle="Add ambassador video"
        onClick={openModal}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative group cursor-pointer">
            <iframe
              width="100%"
              height="400"
              src={video.videoUrl}
              title={`YouTube Video ${video.id}`}
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 object-contain"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* Modal with video content */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Ambassador Video"
      >
        {/* <SectionTitle title="Add Ambassador Video" /> */}
        <div className="mb-4">
          {/* Custom video upload input */}
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {videoFile ? (
              <div className="w-full h-full flex justify-center items-center">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(videoFile)}
                />
                <button
                  onClick={handleRemoveVideo}
                  className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-2"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400">
                <span className="text-xl">🎥</span>
                <span>No Video Selected</span>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="text-gray400 text-sm md:text-base px-3 md:px-14 py-2 md:py-3 rounded-full font-bold font-museomoderno uppercase bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF]"
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Ambassador;
