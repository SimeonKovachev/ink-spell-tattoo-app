export interface WaveDividerProps {
  position?: "top" | "bottom";
  height?: number;
  className?: string;
  type?: "wave" | "curve" | "tilt";
  reversed?: boolean;
  color?: string;
  preserveAspectRatio?: string;
}
