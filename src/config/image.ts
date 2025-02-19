import { ImageConfig, ImagePreset } from "@/types/image";

export const imageConfig = {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },

  presets: {
    thumbnail: {
      width: 400,
      height: 300,
      quality: 85,
      fit: "clip",
    },
    preview: {
      width: 800,
      height: 600,
      quality: 85,
      fit: "clip",
    },
    hero: {
      width: 2040,
      height: 1600,
      quality: 90,
      fit: "clip",
      priority: true,
    },
    gallery: {
      width: 800,
      height: 625,
      quality: 85,
      fit: "clip",
    },
    modal: {
      width: 1200,
      height: 800,
      quality: 95,
      fit: "clip",
    },
    card: {
      width: 600,
      height: 400,
      quality: 85,
      fit: "clip",
    },
    serviceCard: {
      width: 1020, // 51 * 20
      height: 800, // 40 * 20
      quality: 85,
      fit: "clip",
    },
  } satisfies Record<ImagePreset, ImageConfig>,

  sizes: {
    fullWidth: "100vw",
    gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
    card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    hero: "100vw",
  },
} as const;
