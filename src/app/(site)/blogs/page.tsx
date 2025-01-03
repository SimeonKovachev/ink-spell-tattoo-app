"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import { BlogPost } from "@/types/blogPost";
import { getAllPosts } from "@/lib/fetchPosts";
import toast from "react-hot-toast";
import Script from "next/script";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();

        if (data.length === 0) {
          toast("Няма намерени публикации!", { icon: "🛑" });
        } else {
          toast.success("Блог публикациите бяха заредени успешно!");
        }

        setPosts(data);
      } catch (err) {
        console.error("Грешка при зареждане на блог публикации:", err);
        toast.error("Неуспешно зареждане на блог публикациите.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <Breadcrumb pageName="Блог" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <h1 className="text-center text-4xl font-bold mb-8">
            Последни Публикации
          </h1>
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Script id="blog-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Ink Spell Tattoo Studio Blog",
          description:
            "Прочетете последните статии и новини за татуировките и изкуството в Ink Spell Tattoo Studio.",
          url: "https://www.ink-spell.com/blog",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            image: post.mainImage?.asset?.url || "/images/placeholder.jpg",
            datePublished: post.publishedAt,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author?.name || "Неизвестен автор",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.ink-spell.com/blog/${post.slug.current}`,
            },
          })),
        })}
      </Script>
    </>
  );
}
