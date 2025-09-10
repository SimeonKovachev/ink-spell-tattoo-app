// src/types/service.ts
import { PortableTextBlock } from "@portabletext/types";
import { GalleryItem } from "./galleryItem";

export type ServiceCategory =
  | "tattoo"
  | "permanent-makeup"
  //| "piercing"
  | "temporary-tattoo"
  | "inkless-tattoo";

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
    schemaType?: string;
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
    shortDescription: string;
    h1?: string;
    schemaType: string;
    localKeywords: string[];
  }
> = {
  tattoo: {
    name: "Татуировки",
    slug: "tattoo",
    description:
      "Персонализирани художествени татуировки с уникален дизайн и професионално изпълнение в Плевен",
    shortDescription: "Художествени и персонализирани татуировки",
    schemaType: "TattooService",
    localKeywords: [
      "татуировки Плевен",
      "художествени татуировки Плевен",
      "персонализирани татуировки",
      "професионален татуист Плевен",
      "дизайн на татуировки",
      "качествени татуировки България",
    ],
  },
  "permanent-makeup": {
    name: "Перманентен грим",
    slug: "permanent-makeup",
    description:
      "Професионален перманентен грим с микроблейдинг, микропигментация и най-съвременни техники в Плевен",
    shortDescription: "Микроблейдинг, микропигментация и перманентен грим",
    h1: "Професионален перманентен грим в Плевен",
    schemaType: "BeautyService",
    localKeywords: [
      "перманентен грим Плевен",
      "микроблейдинг Плевен",
      "микропигментация Плевен",
      "пудрови вежди Плевен",
      "професионален перманентен грим",
      "перманентен грим България",
    ],
  },
  // piercing: {
  //   name: "Пиърсинг",
  //   slug: "piercing",
  //   description:
  //     "Професионални пиърсинг услуги с висококачествени материали, стерилни условия и експертно изпълнение",
  //   shortDescription: "Професионални пиърсинг услуги и бижута",
  //   h1: "Професионални пиърсинг услуги в Плевен",
  //   schemaType: "PiercingService",
  //   localKeywords: [
  //     "пиърсинг Плевен",
  //     "професионален пиърсинг Плевен",
  //     "пиърсинг услуги България",
  //     "качествени бижута за пиърсинг",
  //     "стерилен пиърсинг",
  //     "ушни пиърсинги",
  //   ],
  // },
  "temporary-tattoo": {
    name: "Временни татуировки",
    slug: "temporary-tattoo",
    description:
      "Временни татуировки за събития, корпоративни мероприятия и тестване на дизайни преди постоянна татуировка",
    shortDescription: "Временни татуировки за събития и тестване",
    h1: "Временни татуировки за всяко събитие",
    schemaType: "TemporaryTattooService",
    localKeywords: [
      "временни татуировки Плевен",
      "татуировки за събития Плевен",
      "корпоративни временни татуировки",
      "тестови татуировки преди постоянни",
      "временни татуировки за партита",
      "качествени временни татуировки",
    ],
  },
  "inkless-tattoo": {
    name: "Безмастилни татуировки",
    slug: "inkless-tattoo",
    description:
      "Безмастилни татуировки за корекция на стрии, камуфлаж на белези и възстановяване на естествения вид на кожата",
    shortDescription: "Корекция на стрии, белези и кожни несъвършенства",
    h1: "Безмастилни татуировки в Плевен",
    schemaType: "SkinCorrectionService",
    localKeywords: [
      "Безмастилни татуировки Плевен",
      "корекция на стрии Плевен",
      "камуфлаж на белези България",
      "възстановяване на кожа",
      "безмастилна пигментация",
      "корекция на кожни несъвършенства",
    ],
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

export const getCategoryLocalKeywords = (
  category: ServiceCategory
): string[] => {
  return SERVICE_CATEGORIES[category].localKeywords;
};
