export const SERVICES_QUERY = `*[_type == "service"]{
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
