export async function fetchGoogleReviews(placeId: string, apiKey: string) {
  const url = `/api/google-reviews?placeId=${placeId}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch Google reviews");
    }

    const data = await response.json();
    return data.reviews || [];
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
}
