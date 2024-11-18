import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { placeId, apiKey } = req.query;

  if (!placeId || !apiKey) {
    return res.status(400).json({ error: "Missing placeId or apiKey" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch Google reviews");
    }

    const data = await response.json();
    res.status(200).json({ reviews: data.result.reviews || [] });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    res.status(500).json({ error: "Error fetching Google reviews" });
  }
}
