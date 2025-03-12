export const SectionHeader = ({
  title,
  subtitle,
}: {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center text-center mt-10 md:mt-0 space-y-10">
      <h2 className="text-center font-museomoderno font-semibold text-4xl md:text-4xl lg:text-5xl xl:text-[56px] text-black">
        {title}
      </h2>
      <p className="font-light max-w-[1100px] text-gray200">{subtitle}</p>
    </div>
  );
};
