import React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-20 z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 md:w-2/3 lg:min-w-2/4 max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 text-xl font-bold bg-gradient-to-r from-[#F9AB7FCC] to-[#FFFFFF] rounded-full p-3 text-gray-700"
        >
          <IoClose className="w-8 h-8" />
        </button>
        <h1 className="text-2xl md:text-2xl text-gray400 font-semibold font-museomoderno mb-8">
          {title}
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
