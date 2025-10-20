export const GALLERY_QUERY = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  description,
  category,
  slug,
  image {
    asset->{
      url
    }
  }
}`;
