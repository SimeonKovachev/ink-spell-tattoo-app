import { NextResponse } from "next/server";
import { BLOG_POSTS_QUERY } from "@/lib/queries/blogPostQuery";
import { client } from "@/lib/client";

export async function GET() {
  try {
    const posts = await client.fetch(BLOG_POSTS_QUERY);

    if (!posts?.length) {
      return NextResponse.json({ message: "No posts found" }, { status: 404 });
    }

    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
