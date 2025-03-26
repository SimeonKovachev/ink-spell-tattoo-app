export const SERVICES_QUERY = `*[_type == "service"] | order(name asc) {
  _id,
  name,
  description,
  image {
    asset->{
      url
    }
  },
  slug,
  seo
}`;

export const SINGLE_SERVICE_QUERY = (
  slug: string
) => `*[_type == "service" && slug.current == "${slug}"][0]{
  _id,
  name,
  description,
  detailedDescription,
  image {
    asset->{
      url
    }
  },
   "galleryItems": galleryItems[]-> {
    _id,
    title,
    description,
    slug,
    image {
      asset->{
        url
      }
    }
  },
  features,
  duration,
  seo,
  slug
}`;
