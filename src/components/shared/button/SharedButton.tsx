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
        {isLoading ? (
          <>
            <div className="flex items-center gap-4">
              {" "}
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </div>
          </>
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default SharedButton;
