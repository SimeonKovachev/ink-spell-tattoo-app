import { cache } from "react";
import { GoogleReview } from "@/types/googleReview";

export const fetchGoogleReviews = cache(async (): Promise<GoogleReview[]> => {
  const res = await fetch("/api/google-reviews", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch reviews");
  const { reviews } = await res.json();
  return reviews ?? [];
});
