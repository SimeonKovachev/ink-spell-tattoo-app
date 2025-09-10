// src/sanity/schemaTypes/services.ts
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
      name: "galleryItems",
      type: "array",
      title: "Gallery Items",
      description:
        "Select images from the gallery to display with this service",
      of: [
        {
          type: "reference",
          to: [{ type: "gallery" }],
          weak: true,
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Татуировки", value: "tattoo" },
          { title: "Перманентен грим", value: "permanent-makeup" },
          { title: "Пиърсинг", value: "piercing" },
          { title: "Временни татуировки", value: "temporary-tattoo" }, // NEW
          { title: "Инклес татуировки", value: "inkless-tattoo" }, // NEW
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      initialValue: "tattoo",
    }),
    defineField({
      name: "price",
      title: "Price (optional)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which this service should appear (lower numbers first)",
      initialValue: 0,
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
        {
          name: "schemaType",
          type: "string",
          title: "Schema Type",
          description: "Override default schema type for structured data",
          options: {
            list: [
              { title: "Tattoo Service", value: "TattooService" },
              { title: "Beauty Service", value: "BeautyService" },
              { title: "Piercing Service", value: "PiercingService" },
              {
                title: "Temporary Tattoo Service",
                value: "TemporaryTattooService",
              },
              {
                title: "Skin Correction Service",
                value: "SkinCorrectionService",
              },
            ],
          },
        },
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
  orderings: [
    {
      title: "Category, then Order",
      name: "categoryOrder",
      by: [
        { field: "category", direction: "asc" },
        { field: "order", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
