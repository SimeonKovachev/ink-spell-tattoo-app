import { PortableTextBlock } from "@portabletext/types";
import { GalleryItem } from "./galleryItem";

export type ServiceCategory = "tattoo" | "permanent-makeup" | "piercing";

export type Service = {
  _id: string;
  name: string;
  description: string;
  detailedDescription?: PortableTextBlock[];
  category: ServiceCategory;
  price?: string;
  image: {
    asset: {
      url: string;
    };
  };
  galleryItems?: GalleryItem[];
  features: string[];
  duration: string | null;
  order?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };
  slug: {
    current: string;
  };
};

export type ServicesByCategory = {
  [K in ServiceCategory]: Service[];
};

export const SERVICE_CATEGORIES: Record<
  ServiceCategory,
  {
    name: string;
    slug: string;
    description: string;
    h1?: string;
  }
> = {
  tattoo: {
    name: "Татуировки",
    slug: "tattoos",
    description: "Персонализирани татуировки и артистични дизайни",
  },
  "permanent-makeup": {
    name: "Перманентен грим",
    slug: "permanent-makeup",
    description: "Микроблейдинг, микропигментация и комбиниран метод",
    h1: "Открийте нашия перманентен грим",
  },
  piercing: {
    name: "Пиърсинг",
    slug: "piercing",
    description: "Професионален пиърсинг и висококачествени бижута",
    h1: "Открийте нашия пиърсинг",
  },
};

export const getCategoryName = (category: ServiceCategory): string => {
  return SERVICE_CATEGORIES[category].name;
};

export const getCategorySlug = (category: ServiceCategory): string => {
  return SERVICE_CATEGORIES[category].slug;
};

export const getCategoryDescription = (category: ServiceCategory): string => {
  return SERVICE_CATEGORIES[category].description;
};
