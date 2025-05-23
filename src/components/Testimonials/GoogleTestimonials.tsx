"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { GoogleReview } from "@/types/googleReview";
import Button from "../Common/Button";
import { fetchGoogleReviews } from "@/lib/fetchGoogleReviews";
import SectionTitle from "../Common/SectionTitle";
import { useQuery } from "@tanstack/react-query";

export default function GoogleTestimonials() {
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-gray-400 py-12">
        Възникна грешка при зареждане на отзивите
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="text-center text-gray-400 py-12">
        Няма налични отзиви в момента
      </div>
    );
  }

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
      />
    ));

  return (
    <section className="relative pt-32 py-12 md:py-24 md:pt-44 lg:py-28 lg:pt-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-pink-500/20 blur-[120px] animate-pulse-strong"></div>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const avatar = review.profile_photo_url
              ? review.profile_photo_url.replace(/=s\\d+-c/, "=s128-c")
              : null;
            return (
              <div
                key={index}
                className="bg-gray-900/50 border border-purple-900/30 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {avatar ? (
                    <Image
                      src={avatar}
                      alt={review.author_name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-700/30 flex items-center justify-center text-purple-300 font-semibold text-lg">
                      {review.author_name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">
                      {review.author_name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {review.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button
            text="Оставете отзив"
            type="outlined"
            responsiveSize={{ sm: "sm", md: "md", lg: "md" }}
            onClick={() =>
              window.open(
                `https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`,
                "_blank"
              )
            }
          />
        </div>
      </div>
    </section>
  );
}
