const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300";

  const variants = {
    primary:
      " bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] text-white hover:scale-105",
    outline:
      "border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
