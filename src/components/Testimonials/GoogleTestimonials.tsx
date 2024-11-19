"use client";

import { useEffect, useState } from "react";
import { GoogleReview } from "@/types/googleReview";
import { fetchGoogleReviews } from "@/lib/fetchGoogleReviews";
import Button from "../Button";

const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID!;
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

export default function GoogleTestimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchGoogleReviews(GOOGLE_PLACE_ID, GOOGLE_API_KEY);
      setReviews(data);
      setLoading(false);
    };

    getReviews();
  }, [GOOGLE_PLACE_ID, GOOGLE_API_KEY]);

  if (loading) {
    return <p className="text-center py-12">Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center py-12">Loading reviews...</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">
        What Our Customers Say
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{review.author_name}</h3>
                <p className="text-sm text-gray-400">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
            <p className="text-yellow-400 mb-2">⭐️ {review.rating}/5</p>
            <p className="text-gray-300">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Button to Leave a Review */}
      <div className="text-center mt-12">
        <Button
          text="Leave a Review"
          type="outlined"
          onClick={() =>
            window.open(
              `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
}
