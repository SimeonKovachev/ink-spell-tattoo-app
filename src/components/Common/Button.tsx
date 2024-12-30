"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ButtonProps } from "@/types/buttonProps";

export default function Button({
  text,
  type = "filled",
  onClick,
  navigateTo,
  icon,
  size = "md",
  className = "",
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const typeStyles = {
    filled:
      "bg-accent-purple hover:bg-hover-purple text-white shadow-lg hover:shadow-purple-500/25 transform hover:scale-105",
    outlined:
      "border-2 border-accent-purple text-accent-purple shadow-md hover:bg-accent-purple hover:text-white",
  };

  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300
    ${sizeStyles[size]}
    ${typeStyles[type]}
    ${className}
  `;

  return (
    <button onClick={handleClick} className={baseStyles}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}
