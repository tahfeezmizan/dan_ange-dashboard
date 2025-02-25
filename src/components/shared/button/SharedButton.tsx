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
        className={`${classes} py-4 px-6 ${
          isLoading
            ? "bg-primary py-0"
            : "bg-gradient-to-r from-[#F9AB7F] via-[#F9AB7FCC] to-white hover:bg-opacity-95"
        } transition-all duration-300 uppercase text-base font-bold leading-[25px] rounded-[32px] text-gray400`}
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
