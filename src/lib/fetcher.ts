export async function fetcher<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      const errorMessage = errorData?.error || res.statusText;
      throw new Error(`Error ${res.status}: ${errorMessage}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error(
      error instanceof Error ? error.message : "Unknown fetch error"
    );
  }
}
