import { SectionHeader } from "../shared/header/SectionHeader";
import Image from "next/image";
import winner from "@/assets/home/winner.png";
import prize from "@/assets/home/prize.png";

// Function to get recent winner details
const getWinnerData = () => {
  return {
    name: "Alex Thompson",
    prize: "Lamborghini",
    testimonial:
      "I never thought I’d win, but here I am with my prize! The process was easy, and I got notified instantly. Don’t miss your chance—go for it!",
    winnerImage: winner,
    prizeImage: prize,
  };
};

const RecentWinners = () => {
  const winner = getWinnerData();

  return (
    <div className="container mx-auto px-5 space-y-36">
      {/* Section Header */}
      <SectionHeader title="Meet our recent winners." />

      {/* Winner Section */}
      <div className="relative bg-gradient-to-r from-[#F9AB7F] to-[#F9AB7F]/10 rounded-xl flex flex-col lg:flex-row items- justify-between mt-12 pt-10">
        {/* Winner Image & Testimonial Group */}
        <div>
          <div className="relative flex flex-col items-center lg:items-center w-full lg:w-[40%] lg:absolute lg:left-0 lg:bottom-[0px] z-10">
            {/* Winner Image */}
            <Image
              src={winner.winnerImage}
              alt={winner.name}
              width={1000}
              height={1000}
              className="w-[600px] h-[400px] object-contain"
            />

            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-[90%] lg:w-[450px] text-center lg:text-left mt-4 lg:mt-[-50px]">
              <p className="text-gray300 text-sm md:text-base font-light text-center">
                {winner.testimonial}
              </p>
              <h3 className="font-museomoderno text-center font-semibold text-lg md:text-2xl mt-3">
                {winner.name}
              </h3>
              <p className="font-museomoderno text-center text-lg font-semibold">
                Prize Own: {winner.prize}
              </p>
            </div>
          </div>
        </div>

        {/* Prize Image */}
        <div className="w-full lg:w-[70%] flex items-end justify-end mt-6 lg:mt-0">
          <Image
            src={winner.prizeImage}
            alt={winner.prize}
            width={1000}
            height={1000}
            className="w-[1000px] h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentWinners;
