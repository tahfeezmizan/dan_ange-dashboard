import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
