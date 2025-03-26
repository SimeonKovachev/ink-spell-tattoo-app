import { PortableTextBlock } from "@portabletext/types";
import { GalleryItem } from "./galleryItem";

export type Service = {
  _id: string;
  name: string;
  description: string;
  detailedDescription?: PortableTextBlock[];
  image: {
    asset: {
      url: string;
    };
  };
  galleryItems?: GalleryItem[];
  features: string[];
  duration: string | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };
  slug: {
    current: string;
  };
};
