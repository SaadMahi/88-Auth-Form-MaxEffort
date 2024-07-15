const Button = ({ children, variant = "primary" }) => {
  return (
    <button
      className={`h-[30px] w-full rounded-[3px] ${variant === "primary" ? "bg-[#62cb31]" : "bg-green-400"} px-3 text-sm text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
