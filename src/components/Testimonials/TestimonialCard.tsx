import Image from "next/image";
import { Star } from "lucide-react";
import { GoogleReview } from "@/types/googleReview";

interface TestimonialCardProps {
  review: GoogleReview;
  index: number;
}

const TestimonialCard = ({ review, index }: TestimonialCardProps) => {
  const avatar = review.profile_photo_url
    ? review.profile_photo_url.replace(/=s\d+-c/, "=s128-c")
    : null;

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        }`}
      />
    ));

  return (
    <div className="testimonial-card">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-900/30 p-6 rounded-xl h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50">
        <div className="flex items-center mb-4">
          {avatar ? (
            <Image
              src={avatar}
              alt={review.author_name}
              width={48}
              height={48}
              className="rounded-full ring-2 ring-purple-500/30"
              priority={index < 3}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white font-semibold text-lg ring-2 ring-purple-500/30">
              {review.author_name?.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="ml-4">
            <h4 className="text-white font-semibold text-lg">
              {review.author_name}
            </h4>
            <p className="text-gray-400 text-sm">
              {review.relative_time_description}
            </p>
          </div>
        </div>
        <div className="flex space-x-1 mb-4">{renderStars(review.rating)}</div>
        <p className="text-gray-300 leading-relaxed line-clamp-4">
          {review.text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
