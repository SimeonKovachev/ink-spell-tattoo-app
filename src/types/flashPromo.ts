export interface FlashPromo {
  _id: string;
  title: string;
  description?: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  validFrom?: string;
  validUntil?: string;
  active?: boolean;
}
