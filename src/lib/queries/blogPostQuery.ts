export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  content,
  mainImage {
    asset->{
      url
    }
  },
  author->{
    name,
    image {
      asset->{
        url
      }
    }
  },
  tags,
  publishedAt,
  seoTitle,
  seoDescription,
  isFeatured
}`;

export const SINGLE_POST_QUERY = (
  slug: string
) => `*[_type == "blogPost" && slug.current == "${slug}"]{
  _id,
  title,
  slug,
  excerpt,
  content,
  mainImage {
    asset->{
      url
    }
  },
  author->{
    name,
    image {
      asset->{
        url
      }
    }
  },
  tags,
  publishedAt,
  seoTitle,
  seoDescription,
  isFeatured
}[0]`;
