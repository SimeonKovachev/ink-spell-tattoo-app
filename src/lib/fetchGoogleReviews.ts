export async function fetchGoogleReviews() {
  try {
    const response = await fetch("/api/google-reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();
    return data.reviews || [];
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
}
