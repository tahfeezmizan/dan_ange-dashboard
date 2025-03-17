import { SectionHeader } from "../shared/header/SectionHeader";
import Image from "next/image";
import image from "@/assets/home/charity.jpg";

// Static charity data
const charitydata = {
  title: "We’re Proud to Support COMIC RELIEF",
  description: `
Giving back is at the heart of what we do, and we are incredibly proud to support Comic Relief, a charity dedicated to fighting poverty, inequality, and social injustice. Through their impactful initiatives, Comic Relief helps vulnerable communities by funding essential programs in areas such as education, mental health, homelessness, and child welfare.

    With every ticket purchased, a portion of the proceeds goes directly to Comic Relief’s life-changing projects, ensuring that individuals and families in need receive critical support. From providing meals and shelter to funding mental health services and educational programs, your participation is making a real difference.

  We believe that small actions lead to big changes, and together, we can bring hope, joy, and opportunity to those who need it most. Join us in supporting Comic Relief’s mission—because when we come together, we can create a brighter future for all.
  `,
  imageUrl: image,
};

const CharityPartner = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <SectionHeader title="Our charity partner." />

      {/* Charity Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-10">
        {/* Text Content */}
        <div>
          <h2 className="font-museomoderno font-semibold text-2xl md:text-3xl lg:text-[32px] text-black lg:mb-4">
            {charitydata.title}
          </h2>
          <p className="text-gray300 font-light text-sm md:text-base leading-relaxed whitespace-pre-line">
            {charitydata.description}
          </p>
        </div>

        {/* Charity Image */}
        <div className="w-full">
          <Image
            src={charitydata.imageUrl}
            alt="Charity Partner"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CharityPartner;
