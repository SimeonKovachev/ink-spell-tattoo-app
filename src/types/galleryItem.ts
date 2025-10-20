export type GalleryItem = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  category: "tattoo" | "permanent-makeup" | "henna-tattoo" | "inkless-tattoo";
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  } | null;
};
