export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const baseClasses = `
    w-full rounded-md border text-base font-bold h-[45px] 
    transition-all text-bgColor disabled:cursor-not-allowed
    disabled:border-slate-400 disabled:bg-slate-400
  `;

  const variants = {
    primary: `
      bg-colorBrand hover:bg-opacity-80 border-none
      ${disabled ? "" : "hover:opacity-90"}
    `,
    secondary: `
      text-darkB border-colorBrand bg-colorGrey2 
      ${disabled ? "" : "hover:border-colorBrand hover:text-bgColor hover:bg-colorBrand"}
    `,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
