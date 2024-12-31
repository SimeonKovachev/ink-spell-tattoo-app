import { PortableTextBlock } from "@portabletext/types";

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
  gallery: Array<{
    asset: {
      url: string;
    };
  }>;
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
