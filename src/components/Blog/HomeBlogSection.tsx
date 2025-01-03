"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BlogPost } from "@/types/blogPost";
import { getAllPosts } from "@/lib/fetchPosts";
import { ArrowRight } from "lucide-react";
import SingleBlog from "./SingleBlog";
import Button from "../Common/Button";

export default function HomeBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        console.error("Грешка при зареждане на блог публикациите:", err);
        toast.error("Неуспешно зареждане на публикациите.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24 lg:py-28 bg-gradient-to-b from-dark to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-[600px] h-[600px]">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-600/20 blur-[120px] animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-semibold text-sm mb-6">
            НАШИТЕ ПОСЛЕДНИ ПУБЛИКАЦИИ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Разгледайте нашия блог
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Открийте най-новите тенденции, вдъхновения и истории от света на
            татуировките и изкуството.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <SingleBlog
              key={post.slug.current}
              blog={post}
              isActive={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            text="Вижте всички публикации"
            type="outlined"
            responsiveSize={{
              sm: "sm",
              md: "md",
              lg: "md",
            }}
            icon={<ArrowRight size={18} />}
            navigateTo="/blog"
          />
        </div>
      </div>
    </section>
  );
}
