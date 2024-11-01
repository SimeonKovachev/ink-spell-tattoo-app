export default {
  name: "promotion",
  type: "document",
  title: "Promotion",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Promotion Title",
    },
    {
      name: "description",
      type: "text",
      title: "Promotion Description",
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Is Active?",
    },
  ],
};
