import { GoogleReview } from "@/types/googleReview";
import fs from "fs";
import path from "path";

const CACHE_FILE = path.join(process.cwd(), "cache", "reviews.json");
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const getCachedReviews = (): GoogleReview[] | null => {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
      if (Date.now() - cache.timestamp < CACHE_DURATION) {
        return cache.reviews as GoogleReview[];
      }
    }
    return null;
  } catch (error) {
    console.error("Cache read error:", error);
    return null;
  }
};

export const setCachedReviews = (reviews: GoogleReview[]): void => {
  try {
    const cacheDir = path.join(process.cwd(), "cache");
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
    fs.writeFileSync(
      CACHE_FILE,
      JSON.stringify({
        reviews,
        timestamp: Date.now(),
      })
    );
  } catch (error) {
    console.error("Cache write error:", error);
  }
};
