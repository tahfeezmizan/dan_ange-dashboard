import Loading from "../loading/Loading";

interface SharedButtonProps {
  text: string;
  classes?: string;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const SharedButton: React.FC<SharedButtonProps> = ({
  classes,
  text,
  isLoading = false,
  onClick,
  type = "button",
}) => {
  return (
    <div>
      <button
        className={`${classes} py-2 lg:py-4 px-6 ${
          isLoading
            ? "bg-primary py-0"
            : "font-museomoderno bg-gradient-to-r from-[#F9AB7F] via-[#F9AB7FCC] to-[#F9AB7FCC]/10 uppercase text-sm md:text-base font-bold leading-[25px] rounded-[32px] text-gray400 px-4 md:px-6 2xl:px-8 py2 md:py-3 2xl:py-3 flex  items-center justify-center gap-2 min-w-48 md:min-w-80 lg::min-w-48 xl:min-w-80 "
        } transition-all duration-300 uppercase text-base font-bold leading-[25px] rounded-[32px] text-gray400 text-center mx-auto`}
        disabled={isLoading}
        onClick={onClick}
        type={type}
      >
        {isLoading ? <Loading /> : text}
      </button>
    </div>
  );
};

export default SharedButton;
