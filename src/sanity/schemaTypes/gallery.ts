export default {
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Image Title",
    },
    {
      name: "image",
      type: "image",
      title: "Gallery Image",
      options: { hotspot: true },
    },
    {
      name: "description",
      type: "text",
      title: "Image Description",
    },
  ],
};
