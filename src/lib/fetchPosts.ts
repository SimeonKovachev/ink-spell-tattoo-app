import { BlogPost } from "@/types/blogPost";
import { fetcher } from "./fetcher";

export async function getAllPosts(): Promise<BlogPost[]> {
  return fetcher<BlogPost[]>("/api/posts");
}

export async function getSinglePost(slug: string): Promise<BlogPost | null> {
  return fetcher<BlogPost | null>(`/api/posts/${slug}`);
}
