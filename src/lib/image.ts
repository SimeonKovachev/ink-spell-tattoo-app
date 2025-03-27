import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import type { ImagePreset, ImageConfig } from "@/types/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { imageConfig } from "@/config/image";

const builder = createImageUrlBuilder(client);

interface UrlForOptions extends Partial<ImageConfig> {
  preset?: ImagePreset;
}

export const urlFor = (
  source: SanityImageSource | null | undefined,
  options: UrlForOptions = {}
) => {
  if (!source) return "/images/placeholder.png";

  let config: ImageConfig;
  if (options.preset) {
    config = {
      ...imageConfig.presets[options.preset],
      ...options,
    };
  } else {
    config = {
      width: options.width || 800,
      quality: options.quality || 85,
      fit: options.fit || "clip",
      priority: options.priority,
    };
  }

  return builder
    .image(source)
    .width(config.width)
    .height(config.height!)
    .quality(config.quality)
    .fit(config.fit)
    .auto("format")
    .url();
};

export const getSizes = (preset: keyof typeof imageConfig.sizes) => {
  return imageConfig.sizes[preset];
};
