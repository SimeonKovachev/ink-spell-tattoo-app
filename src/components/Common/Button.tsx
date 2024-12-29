"use client";

import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  text: string;
  type?: "filled" | "outlined";
  onClick?: () => void;
  navigateTo?: string;
};

export default function Button({
  text,
  type = "filled",
  onClick,
  navigateTo,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  const baseStyles = "font-bold py-2 px-4 rounded transition duration-300";
  const filledStyles = "bg-accent-purple text-white hover:bg-dark-purple";
  const outlinedStyles =
    "border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white";

  const buttonStyles = type === "filled" ? filledStyles : outlinedStyles;

  return (
    <button className={`${baseStyles} ${buttonStyles}`} onClick={handleClick}>
      {text}
    </button>
  );
}
