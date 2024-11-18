import { BlogPost } from "@/types/blogPost";
import { client } from "./client";
import { BLOG_POSTS_QUERY, SINGLE_POST_QUERY } from "./queries/blogPostQuery";

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch(BLOG_POSTS_QUERY);
  return posts;
}

export async function getSinglePost(slug: string): Promise<BlogPost | null> {
  const data = await client.fetch(SINGLE_POST_QUERY(slug));
  return data || null;
}
