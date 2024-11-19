"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import { BlogPost } from "@/types/blogPost";
import { getAllPosts } from "@/lib/fetchPosts";
import toast from "react-hot-toast";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();

        if (data.length === 0) {
          toast("No blog posts found!", { icon: "🛑" });
        } else {
          toast.success("Blog posts loaded successfully!");
        }

        setPosts(data);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        toast.error("Failed to load blog posts.");
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
      <Breadcrumb pageName="Blog Grids" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <h2 className="text-center text-4xl font-bold mb-8">Our Blog</h2>
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
