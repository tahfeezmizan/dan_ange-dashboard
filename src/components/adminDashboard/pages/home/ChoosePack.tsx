const packs = [
  {
    id: 1,
    name: "ESSENTIAL PACK",
    price: "$1",
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
    freeEntries: "1 FREE ENTRY",
  },
  {
    id: 2,
    name: "ELITE PACK",
    price: "$2",
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
    freeEntries: "3 FREE ENTRIES",
  },
  {
    id: 3,
    name: "ULTIMATE PACK",
    price: "$5",
    description:
      "We’ll send you a Digital Calendar + Wallpaper + Behind-the-Scenes Charity Video",
    freeEntries: "8 FREE ENTRIES",
  },
];

const ChoosePack = () => {
  return (
    <div className="container mx-auto px-5">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mt-12">
        {packs.map((pack) => (
          <div
            key={pack.id}
            className="bg-primary/10 shadow-md rounded-lg px-6 xl:px-8 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg xl:gap-6 py-14"
          >
            {/* Pack Name */}
            <h3 className="text-lg md:text-3xl font-semibold font-museomoderno uppercase">
              {pack.name}
            </h3>

            {/* Price */}
            <p className="text-3xl font-museomoderno font-semibold mt-4">
              {pack.price}
            </p>

            {/* Description */}
            <p className=" xl:text-lg font-extralight text-gray300 mt-3">
              {pack.description}
            </p>

            {/* Free Entries */}
            <p className="text-3xl font-museomoderno font-semibold mt-6">
              {pack.freeEntries}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosePack;
