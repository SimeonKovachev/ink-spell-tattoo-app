import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/lib/fetchPosts";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const dynamic = "force-static";
export const revalidate = 3600; 

export const metadata: Metadata = {
  title: "Блог | Статии за татуировки от Ink Spell Tattoo Studio",
  description:
    "Последни новини, съвети и вдъхновения за татуировки, перманентен грим и артистичен живот – директно от Ink Spell Tattoo Studio, Плевен.",
  alternates: { canonical: "https://www.ink-spell.com/blogs" },
  openGraph: {
    title: "Блог | Ink Spell Tattoo Studio",
    description:
      "Разгледайте нашите блог публикации за татуировки, перманентен грим и изкуство.",
    url: "https://www.ink-spell.com/blogs",
    siteName: "Ink Spell Tattoo Studio",
    type: "website",
    images: [
      {
        url: "/images/about/tattoo-sample1.jpg",
        width: 1200,
        height: 630,
        alt: "Ink Spell Tattoo Studio Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог | Ink Spell Tattoo Studio",
    description:
      "Съвети, вдъхновения и новини за татуировките от Ink Spell Tattoo Studio.",
    images: ["/images/about/tattoo-sample1.jpg"],
  },
};

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <Breadcrumb pageName="Блог" />
      <BlogClient posts={posts} />
    </>
  );
}
