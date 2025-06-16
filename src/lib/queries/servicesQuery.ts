export const SERVICES_QUERY = `*[_type == "service"] | order(category asc, order asc, name asc) {
  _id,
  name,
  description,
  detailedDescription,
  category,
  price,
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
  order,
  seo,
  slug
}`;

export const SERVICES_BY_CATEGORY_QUERY = (
  category: string
) => `*[_type == "service" && category == "${category}"] | order(order asc, name asc) {
  _id,
  name,
  description,
  detailedDescription,
  category,
  price,
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
  order,
  seo,
  slug
}`;

export const SINGLE_SERVICE_QUERY = (
  slug: string
) => `*[_type == "service" && slug.current == "${slug}"][0]{
  _id,
  name,
  description,
  detailedDescription,
  category,
  price,
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
  order,
  seo,
  slug
}`;

export const SERVICES_BASIC_QUERY = `*[_type == "service"] | order(category asc, order asc, name asc) {
  _id,
  name,
  description,
  category,
  price,
  image {
    asset->{
      url
    }
  },
  slug
}`;
