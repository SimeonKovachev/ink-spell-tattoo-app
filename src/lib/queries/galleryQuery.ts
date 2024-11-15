export const GALLERY_QUERY = `*[_type == "gallery"]{
  _id,
  title,
  description,
  slug,
  image {
    asset->{
      url
    }
  }
}`;
