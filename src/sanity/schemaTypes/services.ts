import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Service Name",
      validation: (rule) =>
        rule.required().max(50).warning("Shorter titles are better"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Service Description",
      validation: (rule) =>
        rule.required().max(200).warning("Keep the description concise"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Service Image",
      options: { hotspot: true },
      validation: (rule) =>
        rule.required().error("A service image is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
  },
});
