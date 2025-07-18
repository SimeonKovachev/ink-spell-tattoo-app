"use client";

import { GoogleReview } from "@/types/googleReview";
import Button from "../Common/Button";
import { fetchGoogleReviews } from "@/lib/fetchGoogleReviews";
import SectionTitle from "../Common/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { useConversions } from "@/lib/gtag";
import { useMemo } from "react";
import TestimonialCard from "./TestimonialCard";

export default function GoogleTestimonials() {
  const conversions = useConversions();

  const {
    data: reviews = [],
    isLoading,
    error,
  } = useQuery<GoogleReview[], Error>({
    queryKey: ["google-reviews"],
    queryFn: fetchGoogleReviews,
    staleTime: 3600000,
    gcTime: 86400000,
    retry: 2,
  });

  const infiniteReviews = useMemo(() => {
    if (reviews.length === 0) return [];

    return [...reviews, ...reviews, ...reviews];
  }, [reviews]);

  const handleLeaveReviewClick = () => {
    conversions.reviewsLeaveReview();

    window.open(
      `https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`,
      "_blank"
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900 flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-purple-400 opacity-20"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full mb-4">
          <div className="w-8 h-8 text-red-400">⚠️</div>
        </div>
        <p className="text-gray-400 text-lg">
          Възникна грешка при зареждане на отзивите
        </p>
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-500/10 rounded-full mb-4">
          <div className="w-8 h-8 text-gray-400">📝</div>
        </div>
        <p className="text-gray-400 text-lg">Няма налични отзиви в момента</p>
      </div>
    );
  }

  return (
    <section className="relative pt-32 py-12 md:py-24 md:pt-44 lg:py-28 lg:pt-48 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Gradient Orb */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/60 via-fuchsia-500/40 to-pink-500/60 blur-[80px] animate-pulse-strong"></div>
        </div>

        {/* Top Right Gradient Orb */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] animate-gradient-spin-reverse">
          <div className="w-full h-full rounded-full bg-gradient-to-l from-blue-500/50 via-purple-500/60 to-indigo-500/50 blur-[90px] animate-pulse-strong"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/80 rounded-full animate-floating-particle particle-1"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-fuchsia-400/70 rounded-full animate-floating-particle particle-2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-pink-400/60 rounded-full animate-floating-particle particle-3"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400/80 rounded-full animate-floating-particle particle-4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-14">
          <SectionTitle
            subtitle="ОТЗИВИ"
            title="Какво казват нашите клиенти"
            paragraph="Прочетете мненията на доволните клиенти и открийте защо Ink Spell е техният избор номер едно."
            width="840px"
            center
          />
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#1c1231] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#1c1231] to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <div
              className="carousel-track"
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
            >
              {infiniteReviews.map((review, index) => (
                <TestimonialCard
                  key={`${review.author_name}-${index}`}
                  review={review}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            text="Оставете отзив"
            type="outlined"
            responsiveSize={{ sm: "sm", md: "md", lg: "md" }}
            onClick={handleLeaveReviewClick}
          />
        </div>
      </div>
    </section>
  );
}
