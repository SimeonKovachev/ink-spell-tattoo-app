import { PortableTextBlock } from "@portabletext/types";

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: PortableTextBlock[];
  mainImage: {
    asset: { url: string };
  };
  tags: string[];
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  isFeatured?: boolean;
};
