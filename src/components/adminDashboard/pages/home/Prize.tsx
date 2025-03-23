import Image from "next/image";
import first from "@/assets/home/first.png";
import second from "@/assets/home/second.png";
import third from "@/assets/home/third.png";
import { BsTrash } from "react-icons/bs";
const prizes = [
  {
    id: 1,
    title: "GRAND PRIZE",
    description: "Audi A3 valued at $50,000 thanks to Audi Australia.",
    image: first,
  },
  {
    id: 2,
    title: "3 SECONDARY PRIZES TO BE WON",
    description:
      "Sony home theatre packages valued at $5,000, thanks to Sony Australia.",
    image: second,
  },
  {
    id: 3,
    title: "10 RUNNER-UP PRIZES TO BE WON",
    description:
      "Win big and life-changing rewards! From luxury cars, dream vacations, to huge cash prizes.",
    image: third,
  },
];

const Prize = () => {
  return (
    <div className="container mx-auto px-4 2xl:space-y-24">
      {/* Responsive Prize Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div
            key={prize.id}
            className="bg-primary/10 shadow-md rounded-xl flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
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
            <div className="space-y-5 px-5">
              {/* Prize Title */}
              <h3 className="font-museomoderno text-xl xl:text-3xl font-semibold mt-4 h-20">
                {prize.title}
              </h3>

              {/* Description */}
              <p className="text-gray300 text-base lg:text-sm xl:text-base mt-3 h-20">
                {prize.description}
              </p>
            </div>
            <button className="w-full p-5 flex items-center justify-end">
              <BsTrash className="w-7 h-7  text-2xl text-red-500 bg-" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prize;
