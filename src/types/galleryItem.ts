export type GalleryItem = {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  } | null;
};
