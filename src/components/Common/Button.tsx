"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ButtonProps } from "@/types/buttonProps";

// Updated ButtonProps type
interface ResponsiveButtonProps extends ButtonProps {
  responsiveSize?: {
    sm?: "sm" | "md" | "lg";
    md?: "sm" | "md" | "lg";
    lg?: "sm" | "md" | "lg";
  };
}

export default function Button({
  text,
  type = "filled",
  onClick,
  navigateTo,
  icon,
  size = "md",
  responsiveSize,
  className = "",
}: ResponsiveButtonProps) {
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

  const responsiveSizeClasses = responsiveSize
    ? `
      ${responsiveSize.sm ? sizeStyles[responsiveSize.sm] : sizeStyles[size]} 
      ${
        responsiveSize.md
          ? `sm:${sizeStyles[responsiveSize.md]}`
          : `sm:${sizeStyles[size]}`
      }
      ${
        responsiveSize.lg
          ? `lg:${sizeStyles[responsiveSize.lg]}`
          : `lg:${sizeStyles[size]}`
      }
    `
    : sizeStyles[size];

  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300
    ${responsiveSizeClasses}
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
