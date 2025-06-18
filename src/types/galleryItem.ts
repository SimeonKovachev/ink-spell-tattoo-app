export type GalleryItem = {
  _id: string;
  title: string;
  description: string;
  category: "tattoo" | "permanent-makeup";
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  } | null;
};
