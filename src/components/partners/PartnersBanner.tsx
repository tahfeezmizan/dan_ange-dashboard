import bg from "@/assets/section-top.png";

const PartnersBanner = () => {
  return (
    <div>
      <div className="relative font-museomoderno">
        {/* Background Section */}
        <div
          className="relative w-full h-[250px] md:h-[320px] lg:h-[350px] xl:h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Title & Breadcrumb */}
          <div className="container mx-auto px-5 flex flex-col gap-6 xl:gap-8 h-24">
            <h1 className="text-black text-5xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold">
              Partners
            </h1>
            <p className="text-black/60">
              <span className="text-black">Home</span> ➝ Partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersBanner;
