import { NextResponse } from "next/server";
import { BLOG_POSTS_QUERY } from "@/lib/queries/blogPostQuery";
import { client } from "@/lib/client";
import { handleErrorResponse } from "@/lib/utils/error";

export async function GET() {
  try {
    const posts = await client.fetch(BLOG_POSTS_QUERY);

    if (!posts || posts.length === 0) {
      return NextResponse.json({ message: "No posts found" }, { status: 404 });
    }

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return handleErrorResponse(error);
  }
}