import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  route?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  route,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick;
    }
    if (route) router.push(route);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-xl bg-blue-700 font-semibold transition-colors duration-300 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:font-bold hover:bg-blue-600 text-white"
        }
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
