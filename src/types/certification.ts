export type CertificationCategory =
  | "award"
  | "certification"
  | "training"
  | "recognition";

export type Certification = {
  _id: string;
  title: string;
  description: string;
  category: CertificationCategory;
  issuingOrganization: string;
  dateIssued: string;
  isActive: boolean;
  priority: number;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
    alt: string;
  } | null;
};
