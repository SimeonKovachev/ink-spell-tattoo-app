import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

// Cache the Google API fetch function
const getCachedGoogleReviews = unstable_cache(
  async () => {
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!PLACE_ID || !API_KEY) {
      throw new Error("Missing environment variables");
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      throw new Error("Failed to fetch from Google API");
    }

    const data = await response.json();

    if (data.error_message) {
      throw new Error(data.error_message);
    }

    return data.result?.reviews || [];
  },
  ["google-reviews"],
  {
    revalidate: 3600,
    tags: ["reviews"],
  }
);

export async function GET() {
  try {
    const reviews = await getCachedGoogleReviews();
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
