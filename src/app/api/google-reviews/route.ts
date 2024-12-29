import { NextResponse } from "next/server";

export async function GET() {
  try {
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!PLACE_ID || !API_KEY) {
      return NextResponse.json(
        { error: "Missing environment variables" },
        { status: 500 }
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch from Google API");
    }

    const data = await response.json();

    if (data.error_message) {
      console.error("Google API Error:", data.error_message);
      return NextResponse.json(
        { error: "Failed to fetch reviews" },
        { status: 500 }
      );
    }

    return NextResponse.json({ reviews: data.result?.reviews || [] });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
