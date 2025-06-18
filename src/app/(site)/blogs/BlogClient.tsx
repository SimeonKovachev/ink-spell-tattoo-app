"use client";

import { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import { BlogPost } from "@/types/blogPost";
import toast from "react-hot-toast";
import Script from "next/script";
import { Search, Tag } from "lucide-react";

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  if (posts.length === 0) toast("Няма намерени публикации!", { icon: "🛑" });

  const allTags = [...new Set(posts.flatMap((p) => p.tags))];
  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedTag || p.tags.includes(selectedTag))
  );

  return (
    <>
      <section className="relative px-4 py-12 lg:py-16 bg-gradient-to-b from-gray-900 via-[#1c1231] to-[#1a0b2e]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col gap-4 bg-gray-800/50 rounded-lg p-4 border border-purple-500/10">
              <div className="relative">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Търсене в блога..."
                  className="w-full bg-gray-900/50 text-gray-200 rounded-lg pl-10 pr-4 py-2 border border-purple-500/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip
                  active={!selectedTag}
                  onClick={() => setSelectedTag(null)}
                >
                  Всички
                </Chip>
                {allTags.map((tag) => (
                  <Chip
                    key={tag}
                    active={selectedTag === tag}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((blog) => (
              <div
                key={blog._id}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-gray-300">
              <Tag className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              Няма намерени публикации
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
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            image: p.mainImage?.asset?.url ?? "/images/placeholder.jpg",
            datePublished: p.publishedAt,
            description: p.excerpt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.ink-spell.com/blog/${p.slug.current}`,
            },
          })),
        })}
      </Script>
    </>
  );
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm transition-colors ${
        active
          ? "bg-purple-500 text-white"
          : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
}
