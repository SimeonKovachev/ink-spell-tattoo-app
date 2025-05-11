import { NextResponse } from "next/server";
import { SINGLE_POST_QUERY } from "@/lib/queries/blogPostQuery";
import { client } from "@/lib/client";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const post = await client.fetch(SINGLE_POST_QUERY(params.slug));

  if (!post) {
    return NextResponse.json(
      { message: `No post found for slug: ${params.slug}` },
      { status: 404 }
    );
  }

  return NextResponse.json(post, {
    status: 200,
    headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=60" },
  });
}
