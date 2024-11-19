import { PortableTextBlock } from "@portabletext/types";

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: PortableTextBlock[];
  mainImage: {
    asset: { url: string };
  } | null;
  author: {
    name: string;
    image: {
      asset: { url: string };
    } | null;
  } | null;
  tags: string[];
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  isFeatured?: boolean;
};
