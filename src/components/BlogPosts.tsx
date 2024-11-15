"use client";

import { useEffect, useState } from "react";
import { client } from "../lib/client";
import { urlFor } from "../lib/image";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { BLOG_POSTS_QUERY } from "@/lib/queries/blogPostQuery";
import { BlogPost } from "@/types/blogPost";

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(BLOG_POSTS_QUERY);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  if (posts.length === 0) {
    return <p className="text-center py-12">Loading Blog Posts...</p>;
  }

  const currentPost = posts[currentIndex];
  const postImageUrl = currentPost.mainImage?.asset?.url
    ? urlFor(currentPost.mainImage.asset).width(800).height(600).url()
    : "/images/placeholder.png";

  return (
    <section className="bg-yellow-400 text-secondary py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Blog</h2>

      {/* Thumbnails for all blog posts */}
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto">
        {posts.map((post, index) => (
          <div
            key={post._id}
            className={`cursor-pointer ${
              index === currentIndex ? "border-b-4 border-secondary" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={post.mainImage?.asset?.url || "/images/placeholder.png"}
              alt={post.title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <p className="text-center text-sm mt-2">{post.title}</p>
          </div>
        ))}
      </div>

      {/* Main blog post details */}
      <div className="max-w-4xl mx-auto relative flex items-center">
        {/* Navigation Arrows */}
        <button onClick={handlePrev} className="absolute left-0 z-10 p-2">
          <ArrowLeftSquare
            size={36}
            className="text-secondary hover:text-gray-700"
          />
        </button>

        <div className="flex flex-col items-center text-secondary p-4 text-center w-full">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={currentPost.title}
              className="w-full h-80 object-cover mb-6 rounded-lg"
            />
          )}
          <h3 className="text-2xl font-semibold mb-2">{currentPost.title}</h3>
          <p className="text-sm mb-4">{currentPost.excerpt}</p>
          <div className="flex items-center gap-4 text-center">
            <Link href={`/blog/${currentPost.slug.current}`}>
              <Button text="Read More" type="outlined" color="dark" />
            </Link>
          </div>
        </div>

        <button onClick={handleNext} className="absolute right-0 z-10 p-2">
          <ArrowRightSquare
            size={36}
            className="text-secondary hover:text-gray-700"
          />
        </button>
      </div>
    </section>
  );
}
