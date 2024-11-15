import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Image Title",
      validation: (rule) =>
        rule.required().max(50).warning("Shorter titles are better"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Image Description",
      validation: (rule) =>
        rule.required().max(200).warning("Keep the description concise"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Gallery Image",
      options: { hotspot: true },
      validation: (rule) =>
        rule.required().error("An image is required for the gallery"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
