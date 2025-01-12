import { NextRequest, NextResponse } from "next/server";
import { SINGLE_POST_QUERY } from "@/lib/queries/blogPostQuery";
import { client } from "@/lib/client";
import { handleErrorResponse } from "@/lib/utils/error";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json(
      { error: "Missing slug parameter" },
      { status: 400 }
    );
  }

  try {
    const post = await client.fetch(SINGLE_POST_QUERY(slug));

    if (!post) {
      return NextResponse.json(
        { message: `No post found for slug: ${slug}` },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return handleErrorResponse(error);
  }
}
