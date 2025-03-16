import Image from "next/image";
import { SectionHeader } from "../shared/header/SectionHeader";
import partner from "@/assets/partner.png"; // Static import for image

const BecomeAPartner = () => {
  const partners = [
    {
      img: partner,
      name: "Influencer partner",
      description: "Share our mission and engage with your audience.",
    },
    {
      img: partner,
      name: "Charity partner",
      description: "Collaborate to amplify your cause and impact.",
    },
    {
      img: partner,
      name: "Prize partner",
      description: "Showcase your brand through our exciting promotions.",
    },
    {
      img: partner,
      name: "Sponsor",
      description:
        "Support our operations and enhance your brand trust through our platform.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <SectionHeader
        title="Become a partner."
        subtitle="Want to join the Chance Collective family? We’re always looking for passionate partners to help us make a difference. Whether you’re a brand, charity, influencer, or sponsor, there’s a place for you here. Explore our partnership opportunities:"
      />

      <div className="mt-8 overflow-x-auto no-scrollbar">
        <div className="flex space-x-6 pb-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full min-w-[300px] bg-primary/10 p-6 rounded-lg text-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/20"
            >
              <Image
                src={partner.img}
                alt={partner.name}
                className="w-20 h-20 md:w-[100px] md:h-[100px] mx-auto rounded-full mb-4"
              />
              <h3 className="font-museomoderno text-2xl font-semibold">
                {partner.name}
              </h3>
              <p className="text-gray-600 mt-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeAPartner;
