"use client";

import { Suspense } from "react";
import PopularArticle from "@/components/Blog/PopularArticle";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { format } from "date-fns";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getSizes, urlFor } from "@/lib/image";
import { BlogPost } from "@/types/blogPost";

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

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-8/12">
              <article className="prose prose-invert prose-lg max-w-none xl:pr-10">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text">
                  {post.title}
                </h1>
                <div className="text-gray-300 leading-relaxed">
                  <PortableText value={post.content} />
                </div>
              </article>
            </div>

            <div className="w-full px-4 lg:w-4/12">
              <aside className="space-y-8">
                <Suspense fallback={<LoadingState />}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-500/20 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text text-white mb-6">
                      Популярни статии
                    </h2>
                    <div className="space-y-6">
                      {posts
                        .filter((blog) => blog.title)
                        .slice(0, 3)
                        .map((blog, i) => (
                          <PopularArticle
                            key={i}
                            image={blog.mainImage?.asset?.url}
                            title={blog.title.slice(0, 30)}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Ad Banner */}
                  {/* <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/images/blog/banner-ad.png"
                      alt="Advertisement"
                      width={408}
                      height={254}
                      className="w-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div> */}
                </Suspense>
              </aside>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap mt-20">
            <div className="wow fadeInUp w-full px-4" data-wow-delay=".2s">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text text-white mb-4">
                Свързани статии
              </h2>
              <div className="h-1 w-20 bg-accent-purple rounded-full mb-10"></div>
            </div>

            {posts.slice(0, 3).map((blog, key) => (
              <div key={key} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
