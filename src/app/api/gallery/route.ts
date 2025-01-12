import { NextResponse } from "next/server";
import { GALLERY_QUERY } from "@/lib/queries/galleryQuery";
import { client } from "@/lib/client";
import { handleErrorResponse } from "@/lib/utils/error";

export async function GET() {
  try {
    const galleryItems = await client.fetch(GALLERY_QUERY);

    if (!galleryItems || galleryItems.length === 0) {
      return NextResponse.json(
        { message: "No gallery items found" },
        { status: 404 }
      );
    }

    return NextResponse.json(galleryItems, { status: 200 });
  } catch (error) {
    return handleErrorResponse(error);
  }
}
