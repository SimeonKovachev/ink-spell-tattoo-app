import React from "react";

type ButtonProps = {
  text: string;
  type?: "filled" | "outlined";
  color?: "yellow" | "dark";
  onClick?: () => void;
};

export default function Button({
  text,
  type = "filled",
  color = "yellow",
  onClick,
}: ButtonProps) {
  const colors = {
    yellow: {
      filled: "bg-yellow-500 text-gray-900 hover:bg-yellow-600",
      outlined:
        "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900",
    },
    dark: {
      filled: "bg-gray-900 text-white hover:bg-black",
      outlined:
        "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    },
  };

  const buttonStyles =
    type === "filled" ? colors[color].filled : colors[color].outlined;

  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 uppercase font-semibold transition duration-200 ${buttonStyles}`}
    >
      {text}
    </button>
  );
}
