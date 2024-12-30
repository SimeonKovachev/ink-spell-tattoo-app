import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-purple": "#8b5cf6",
        "hover-purple": "#6f3ccf",
        "dark-purple": "#4B0082",
        "primary-bg": "#2D2D2D",
        "text-color": "#F3F4F6",
        "border-color": "#444444",
      },
      fontFamily: {
        subheading: "var(--font-subheading)",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

export default config;
