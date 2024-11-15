export type Service = {
  _id: string;
  name: string;
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
