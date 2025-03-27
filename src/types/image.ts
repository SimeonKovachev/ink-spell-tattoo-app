import type { FitMode } from "@sanity/image-url/lib/types/types";

export type ImagePreset =
  | "thumbnail"
  | "preview"
  | "hero"
  | "gallery"
  | "modal"
  | "card"
  | "serviceCard"
  | "promo";

export interface ImageConfig {
  width: number;
  height?: number;
  quality: number;
  fit: FitMode;
  priority?: boolean;
}
