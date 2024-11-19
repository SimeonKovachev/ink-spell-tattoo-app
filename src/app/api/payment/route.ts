import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-10-28" as Stripe.LatestApiVersion,
  });

  const data = await request.json();
  const priceId = data.priceId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: process.env.SITE_URL!,
    cancel_url: process.env.SITE_URL!,
  });

  return NextResponse.json(session.url);
}
