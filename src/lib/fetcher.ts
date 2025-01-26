export async function fetcher<T>(url: string): Promise<T> {
  try {
    const fullUrl = url.startsWith("http")
      ? url
      : `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${url}`;

    const res = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error(
      error instanceof Error
        ? `Fetch failed: ${error.message}`
        : "Unknown fetch error"
    );
  }
}
