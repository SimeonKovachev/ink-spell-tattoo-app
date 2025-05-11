"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import { BlogPost } from "@/types/blogPost";
import { getAllPosts } from "@/lib/fetchPosts";
import toast from "react-hot-toast";
import Script from "next/script";
import { Search, Tag } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        if (data.length === 0) {
          toast("Няма намерени публикации!", { icon: "🛑" });
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

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedTag || post.tags.includes(selectedTag))
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb pageName="Блог" />

      <section className="relative px-4 py-12 lg:py-16 bg-gradient-to-b from-gray-900 via-[#1c1231] to-[#1a0b2e]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col gap-4 bg-gray-800/50 rounded-lg p-4 border border-purple-500/10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Търсене в блога..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900/50 text-gray-200 rounded-lg pl-10 pr-4 py-2 border border-purple-500/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    !selectedTag
                      ? "bg-purple-500 text-white"
                      : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                  } transition-colors`}
                >
                  Всички
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTag === tag
                        ? "bg-purple-500 text-white"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                    } transition-colors`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((blog, i) => (
              <div
                key={i}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-purple-500 mb-4">
                <Tag className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl text-gray-200 mb-2">
                Няма намерени публикации
              </h3>
              <p className="text-gray-400">
                Опитайте с различни критерии за търсене
              </p>
            </div>
          )}
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
