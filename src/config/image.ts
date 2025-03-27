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
      width: 1280,
      height: 720,
      quality: 90,
      fit: "clip",
      priority: true,
    },
    gallery: {
      width: 800,
      quality: 85,
      fit: "max",
    },
    modal: {
      width: 800,
      quality: 95,
      fit: "max",
    },
    card: {
      width: 600,
      height: 400,
      quality: 85,
      fit: "clip",
    },
    serviceCard: {
      width: 1020,
      height: 800,
      quality: 85,
      fit: "clip",
    },
    promo: {
      width: 600,
      height: 600,
      quality: 85,
      fit: "clip",
    },
  } satisfies Record<ImagePreset, ImageConfig>,

  sizes: {
    fullWidth: "100vw",
    gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
    card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    hero: "100vw",
    modal: "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw",
    promo: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
} as const;
