import React from "react";

type ButtonProps = {
  text: string;
  type?: "filled" | "outlined";
  onClick?: () => void;
};

export default function Button({
  text,
  type = "filled",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 uppercase font-semibold transition duration-200 ${
        type === "filled"
          ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600"
          : "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
      }`}
    >
      {text}
    </button>
  );
}
