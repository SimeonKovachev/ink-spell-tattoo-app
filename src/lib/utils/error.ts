import { NextResponse } from "next/server";

export function handleErrorResponse(error: unknown, status = 500) {
  console.error("API Error:", error);
  return NextResponse.json(
    { error: error instanceof Error ? error.message : "Unknown error" },
    { status }
  );
}
