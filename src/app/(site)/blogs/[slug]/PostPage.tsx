"use client";

import { Suspense } from "react";
import PopularArticle from "@/components/Blog/PopularArticle";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { format } from "date-fns";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getSizes, urlFor } from "@/lib/image";
import { BlogPost } from "@/types/blogPost";

export const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || "Ink‑Spell tattoo"}
        className="my-6 rounded-xl shadow-lg"
      />
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-accent-purple font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
};

function LoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
}

export default function PostPage({
  initialPosts,
  initialPost,
}: {
  initialPosts: BlogPost[];
  initialPost: BlogPost;
}) {
  const posts = initialPosts;
  const post = initialPost;

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-[600px] text-white">
        Статията не е намерена
      </div>
    );
  }

 const featured = initialPosts.filter(
    (p) => p.isFeatured && p._id !== post._id
  );
  const fallback = [...initialPosts]
    .filter((p) => p._id !== post._id)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const related = (featured.length ? featured : fallback).slice(0, 3);

  return (
    <>
      <Breadcrumb pageName="Детайли за блог статия" />

      <section className="bg-dark px-4 py-12 lg:py-16">
        <div className="container">
          {/* Hero Section */}
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={urlFor(initialPost.mainImage, { preset: "hero" })}
                alt={post.title}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                sizes={getSizes("hero")}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
            </div>

            {/* Post Meta */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                {post.publishedAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {format(new Date(post.publishedAt), "dd MMM yyyy")}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>5 мин четене</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <article className="prose prose-invert prose-lg mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text">
                  {post.title}
                </h1>
                <div className="text-gray-300 leading-relaxed">
                  <PortableText
                    value={post.content}
                    components={ptComponents}
                  />
                </div>
              </article>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap mt-20">
            <div className="wow fadeInUp w-full px-4" data-wow-delay=".2s">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text text-white mb-4">
                Свързани статии
              </h2>
              <div className="h-1 w-20 bg-accent-purple rounded-full mb-10"></div>
            </div>

            {related.map((blog) => (
              <div
                key={blog._id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
