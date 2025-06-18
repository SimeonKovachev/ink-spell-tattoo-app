export const GALLERY_QUERY = `*[_type == "gallery"]{
  _id,
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
