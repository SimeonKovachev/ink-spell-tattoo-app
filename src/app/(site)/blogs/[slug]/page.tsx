import { Suspense } from "react";
import PopularArticle from "@/components/Blog/PopularArticle";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts, getSinglePost } from "@/lib/fetchPosts";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";

type PageParams = { slug: string };

export async function generateMetadata({ params }: { params: PageParams }) {
  const post = await getSinglePost(params.slug);
  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (!post) {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  return {
    title: `${post.seoTitle || post.title} | ${siteName}`,
    description: post.seoDescription || post.excerpt,
    author: post.author?.name || authorName,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

const defaultAuthorImage = "/images/blog/author-01.png";
const defaultPostImage = "/images/blog/blog-01.jpg";

export default async function Post({ params }: { params: PageParams }) {
  const [posts, post] = await Promise.all([
    getAllPosts(),
    getSinglePost(params.slug),
  ]);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-[600px] text-white">
        Post not found
      </div>
    );
  }

  return (
    <>
      <Breadcrumb pageName="Blog Details" />

      <section className="pb-10 pt-20 bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          {/* Hero Section */}
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={post.mainImage?.asset?.url || defaultPostImage}
                alt={post.title}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
            </div>

            {/* Post Meta */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                {/* Author - Only show if author exists */}
                {post.author && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-700">
                      <Image
                        src={
                          post.author.image?.asset?.url || defaultAuthorImage
                        }
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-medium">
                      By{" "}
                      <Link
                        href="/#"
                        className="hover:text-gray-300 transition-colors"
                      >
                        {post.author.name}
                      </Link>
                    </span>
                  </div>
                )}

                {/* Date */}
                {post.publishedAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {format(new Date(post.publishedAt), "dd MMM yyyy")}
                    </span>
                  </div>
                )}

                {/* Reading Time */}
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {/* Main Content */}
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

            {/* Sidebar */}
            <div className="w-full px-4 lg:w-4/12">
              <aside className="space-y-8">
                <Suspense fallback={<LoadingState />}>
                  {/* <Newsletter /> */}

                  {/* Popular Articles */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-500/20 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text text-white mb-6">
                      Popular Articles
                    </h2>
                    <div className="space-y-6">
                      {posts
                        .filter((blog) => blog.title)
                        .slice(0, 3)
                        .map((blog, i) => (
                          <PopularArticle
                            key={i}
                            image={
                              blog.mainImage?.asset?.url || defaultPostImage
                            }
                            title={blog.title.slice(0, 30)}
                            name={blog.author?.name || "Anonymous"}
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

          {/* Related Articles */}
          <div className="-mx-4 flex flex-wrap mt-20">
            <div className="wow fadeInUp w-full px-4" data-wow-delay=".2s">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text text-white mb-4">
                Related Articles
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
