import { BlogPost } from "@/types/blogPost";
import { client } from "./client";
import { BLOG_POSTS_QUERY, SINGLE_POST_QUERY } from "./queries/blogPostQuery";

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(BLOG_POSTS_QUERY);
    if (!posts || posts.length === 0) {
      console.warn("No posts found");
      return [];
    }
    return posts as BlogPost[];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getSinglePost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(SINGLE_POST_QUERY(slug));
    if (!post) {
      console.warn(`No post found for slug: ${slug}`);
      return null;
    }
    return post as BlogPost;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}
