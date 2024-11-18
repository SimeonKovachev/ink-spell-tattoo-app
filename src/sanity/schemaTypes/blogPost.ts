import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) =>
        rule.required().max(100).warning("Shorter titles are better"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      validation: (rule) => rule.max(200).warning("Keep the excerpt short"),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Featured Image",
      options: { hotspot: true },
      validation: (rule) =>
        rule.required().error("A featured image is required"),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
      validation: (rule) =>
        rule.max(60).warning("Shorter SEO titles are better"),
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
      validation: (rule) =>
        rule.max(160).warning("SEO description should be under 160 characters"),
    }),
    defineField({
      name: "isFeatured",
      type: "boolean",
      title: "Feature this post?",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "mainImage",
    },
  },
});
