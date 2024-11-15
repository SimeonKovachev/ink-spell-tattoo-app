export const REVIEWS_QUERY = `*[_type == "review"]{
  _id,
  author_name,
  text,
  rating,
  relative_time_description,
  profile_photo_url
}`;
