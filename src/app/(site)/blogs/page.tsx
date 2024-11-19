import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/lib/fetchPosts";
import { BlogPost } from "@/types/blogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog Grids | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "Blog grids page description",
};

export default async function Blog() {
  const posts: BlogPost[] = await getAllPosts();

  return (
    <>
      <Breadcrumb pageName="Blog Grids" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
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
};