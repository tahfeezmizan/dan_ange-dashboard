import Image from "next/image";
import first from "@/assets/home/first.png";
import second from "@/assets/home/second.png";
import third from "@/assets/home/third.png";
import { SectionHeader } from "../shared/header/SectionHeader";
const prizes = [
  {
    id: 1,
    title: "Grand prize",
    date: "23 June 2025",
    code: "P58964T1483",
    description: "Audi A3 valued at $50,000 thanks to Audi Australia.",
    image: first,
  },
  {
    id: 2,
    title: "3 SECONDARY PRIZES TO BE WON",
    date: "23 June 2025",
    code: "P58964T1483",
    description:
      "Sony home theatre packages valued at $5,000, thanks to Sony Australia.",
    image: second,
  },
  {
    id: 3,
    title: "10 RUNNER-UP PRIZES TO BE WON",
    date: "23 June 2025",
    code: "P58964T1483",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes.",
    image: third,
  },
];

const Prize = () => {
  return (
    <div className="container mx-auto px-4 space-y-24">
      <SectionHeader
        title="Every pack purchased contributes to projects that help to make a
        difference."
      />
      {/* Responsive Prize Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div
            key={prize.id}
            className="bg-primary/10 shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="relative w-full p-4 rounded-lg bg-gradient-to-br from-[#F9AB7F] via-[#F9AB7F]/30 to-white h-72 lg:h-60 xl:h-80">
              {/* Image positioned properly inside the gradient */}
              <Image
                src={prize.image}
                alt={prize.title}
                width={1000}
                height={1000}
                className="w-[410px] h-60 object-contain bg-no-repeat mx-auto relative z-10"
              />
            </div>
            <div className="space-y-5">
              {/* Prize Title */}
              <h3 className="font-museomoderno text-2xl xl:text-3xl font-semibold mt-4">
                {prize.title}
              </h3>

              {/* Date & Code */}
              <div className="flex justify-center items-center gap-4 xl:text-lg font-museomoderno text-[#F9AB7F] font-semibold mt-2">
                <span>{prize.date}</span> | <span>{prize.code}</span>
              </div>

              {/* Description */}
              <p className="text-gray300 text-base lg:text-sm xl:text-base mt-3">
                {prize.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prize;
