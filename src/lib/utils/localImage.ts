interface LocalImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  sizes?: string;
  placeholder?: string;
}

export const localImageUrl = (
  path: string | null | undefined,
  options: LocalImageOptions = {}
) => {
  const {
    width = 800,
    height = 600,
    quality = 85,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    placeholder = "/images/placeholder.png",
  } = options;

  const src = path || placeholder;

  return {
    src,
    width,
    height,
    quality,
    sizes,
  };
};
