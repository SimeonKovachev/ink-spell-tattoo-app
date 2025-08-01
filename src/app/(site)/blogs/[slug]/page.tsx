import { getSinglePost, getAllPosts } from "@/lib/fetchPosts";
import PostPage from "./PostPage";

type PageParams = { slug: string };
export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: PageParams }) {
  const post = await getSinglePost(params.slug);
  const siteName = process.env.SITE_NAME;
  const keywords = post!.tags?.length ? post!.tags.join(", ") : undefined;

  if (!post) {
    return {
      title: "Статията не е намерена | Ink Spell Tattoo Studio",
      description:
        "Не можем да намерим желаната статия. Вижте други интересни публикации на нашия блог.",
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
    description:
      post.seoDescription ||
      post.excerpt ||
      "Открийте нашите най-нови статии за татуировки, изкуство и дизайн.",
    keywords,
    alternates: {
      canonical: `https://www.ink-spell.com/blogs/${params.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://www.ink-spell.com/blogs/${params.slug}`,
      type: "article",
      siteName,
      tags: post.tags,
      images: [
        {
          url: post.mainImage?.asset?.url || "/images/blog/blog-01.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.mainImage?.asset?.url || "/images/blog/blog-01.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const [posts, post] = await Promise.all([
    getAllPosts(),
    getSinglePost(params.slug),
  ]);

  return <PostPage initialPosts={posts} initialPost={post!} />;
}
