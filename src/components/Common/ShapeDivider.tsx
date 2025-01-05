"use client";

import { WaveDividerProps } from "@/types/shapeDivider";
import { useEffect, useState } from "react";

export default function WaveDivider({
  position = "bottom",
  height = 120,
  className = "",
  type = "wave",
  reversed = false,
  color = "#1a0b2e",
  preserveAspectRatio = "none",
}: WaveDividerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const waves = {
    wave: `M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,${position === "top" ? "0" : "320"}L1392,${position === "top" ? "0" : "320"}C1344,${position === "top" ? "0" : "320"},1248,${position === "top" ? "0" : "320"},1152,${position === "top" ? "0" : "320"}C1056,${position === "top" ? "0" : "320"},960,${position === "top" ? "0" : "320"},864,${position === "top" ? "0" : "320"}C768,${position === "top" ? "0" : "320"},672,${position === "top" ? "0" : "320"},576,${position === "top" ? "0" : "320"}C480,${position === "top" ? "0" : "320"},384,${position === "top" ? "0" : "320"},288,${position === "top" ? "0" : "320"}C192,${position === "top" ? "0" : "320"},96,${position === "top" ? "0" : "320"},48,${position === "top" ? "0" : "320"}L0,${position === "top" ? "0" : "320"}Z`,
    curve: `M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,${position === "top" ? "0" : "320"}L1392,${position === "top" ? "0" : "320"}C1344,${position === "top" ? "0" : "320"},1248,${position === "top" ? "0" : "320"},1152,${position === "top" ? "0" : "320"}C1056,${position === "top" ? "0" : "320"},960,${position === "top" ? "0" : "320"},864,${position === "top" ? "0" : "320"}C768,${position === "top" ? "0" : "320"},672,${position === "top" ? "0" : "320"},576,${position === "top" ? "0" : "320"}C480,${position === "top" ? "0" : "320"},384,${position === "top" ? "0" : "320"},288,${position === "top" ? "0" : "320"}C192,${position === "top" ? "0" : "320"},96,${position === "top" ? "0" : "320"},48,${position === "top" ? "0" : "320"}L0,${position === "top" ? "0" : "320"}Z`,
    tilt: `M0,128L1440,${position === "top" ? "0" : "320"}L1440,${position === "top" ? "0" : "320"}L0,${position === "top" ? "0" : "320"}Z`,
  };

  const selectedPath = waves[type];

  return (
    <div
      className={`absolute ${position}-0 left-0 w-full overflow-hidden leading-0 transform ${
        reversed ? "scale-x-[-1]" : ""
      } ${className}`}
      style={{
        height: `${height}px`,
        zIndex: 20,
      }}
    >
      <svg
        className="relative block w-full h-full"
        preserveAspectRatio={preserveAspectRatio}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={selectedPath} fill={color} />
      </svg>
    </div>
  );
}
