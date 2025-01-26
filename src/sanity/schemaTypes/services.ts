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
      name: "detailedDescription",
      type: "array",
      title: "Detailed Description",
      of: [{ type: "block" }],
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
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          type: "object",
          name: "galleryImage",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Gallery Image",
              options: { hotspot: true },
            },
            {
              name: "reference",
              type: "reference",
              title: "Existing Gallery Item",
              to: [{ type: "gallery" }],
              description: "Optional: Link to an existing gallery item",
            },
            {
              name: "title",
              type: "string",
              title: "Image Title",
              description: "Optional title for the image",
            },
            {
              name: "autoCreateGallery",
              type: "boolean",
              title: "Automatically create Gallery item",
              description: "Will create a new Gallery entry with this image",
            },
          ],
          preview: {
            select: {
              media: "image",
              title: "title",
            },
          },
        },
      ],
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "duration",
      type: "string",
      title: "Duration",
    }),
    defineField({
      name: "seo",
      type: "object",
      title: "SEO Metadata",
      fields: [
        { name: "metaTitle", type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text", title: "Meta Description" },
        { name: "metaKeywords", type: "array", of: [{ type: "string" }] },
      ],
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
