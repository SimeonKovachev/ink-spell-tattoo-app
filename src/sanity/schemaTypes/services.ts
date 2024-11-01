export default {
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Service Name",
    },
    {
      name: "description",
      type: "text",
      title: "Service Description",
    },
    {
      name: "image",
      type: "image",
      title: "Service Image",
      options: { hotspot: true },
    },
  ],
};
