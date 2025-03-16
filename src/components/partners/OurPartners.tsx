import { Carousel } from "antd";
import Image from "next/image";
import { SectionHeader } from "../shared/header/SectionHeader";
import logo1 from "@/assets/home/logoone.png";
import logo2 from "@/assets/home/logtwo.png";

// Sponsor logos (replace with actual image paths)
const sponsors = [
  { id: 1, image: logo1, alt: "Royal Styles" },
  { id: 2, image: logo2, alt: "Breitling" },
  { id: 3, image: logo1, alt: "Santander" },
  { id: 4, image: logo2, alt: "Breitling" },
  { id: 5, image: logo1, alt: "Company" },
  { id: 6, image: logo2, alt: "Breitling" },
  { id: 7, image: logo1, alt: "Heathrow" },
  { id: 8, image: logo2, alt: "Cander" },
  { id: 8, image: logo2, alt: "Cander" },
  { id: 8, image: logo2, alt: "Cander" },
];

const OurPartners = () => {
  return (
    <div className=" mx-auto px-5 space-y-10">
      <SectionHeader title="Current partners." />
      <Carousel
        autoplay
        autoplaySpeed={1000}
        dots={false}
        slidesToShow={7}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1540,
            settings: { slidesToShow: 6 },
          },
          {
            breakpoint: 1324,
            settings: { slidesToShow: 5 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 },
          },
        ]}
        className=""
      >
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="flex justify-center">
            <Image
              src={sponsor.image}
              alt={sponsor.alt}
              width={1000}
              height={1000}
              className="object-contain w-48 h-40"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OurPartners;
