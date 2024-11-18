import React from "react";

type ButtonProps = {
  text: string;
  type?: "filled" | "outlined";
  color?: "purple" | "dark";
  onClick?: () => void;
};

export default function Button({
  text,
  type = "filled",
  color = "purple",
  onClick,
}: ButtonProps) {
  const buttonStyles =
    type === "filled"
      ? "bg-accent-purple text-white hover:bg-dark-purple"
      : "border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 uppercase font-semibold transition duration-300 ${buttonStyles}`}
    >
      {text}
    </button>
  );
}
