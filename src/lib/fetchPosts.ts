import { BlogPost } from "@/types/blogPost";
import { BLOG_POSTS_QUERY, SINGLE_POST_QUERY } from "./queries/blogPostQuery";
import { client } from "./client";

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(BLOG_POSTS_QUERY);
    if (!posts || posts.length === 0) {
      console.warn("No blog posts found");
      return [];
    }
    return posts as BlogPost[];
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
}

export async function getSinglePost(slug: string): Promise<BlogPost | null> {
  try {
    const query = SINGLE_POST_QUERY(slug);
    const post = await client.fetch(query);
    if (!post) {
      console.warn(`No blog post found for slug: "${slug}"`);
      return null;
    }
    return post as BlogPost;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}
