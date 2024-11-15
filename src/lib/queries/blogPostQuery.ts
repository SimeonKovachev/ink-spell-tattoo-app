export const BLOG_POSTS_QUERY = `*[_type == "blogPost"]{
  _id,
  title,
  slug,
  content,
  excerpt,
  mainImage {
    asset->{
      url
    }
  },
  publishedAt
} | order(publishedAt desc)`;
