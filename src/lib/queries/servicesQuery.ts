export const SERVICES_QUERY = `*[_type == "service"] | order(name asc) {
  _id,
  name,
  description,
  slug,
  image {
    asset->{
      url
    }
  }
}`;

export const SINGLE_SERVICE_QUERY = (slug: string) => `*[_type == "service" && slug.current == "${slug}"]{
  _id,
  name,
  description,
  slug,
  image {
    asset->{
      url
    }
  }
}[0]`;
