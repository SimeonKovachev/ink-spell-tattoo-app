import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  type: "document",
  title: "Certifications & Awards",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Certificate/Award Title",
      description: "The name of the certification or award",
      validation: (rule) =>
        rule.required().max(100).warning("Keep titles concise"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Brief description of the achievement",
      validation: (rule) =>
        rule.required().max(300).warning("Keep descriptions brief"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Certificate/Award Image",
      description: "Upload the certificate or award image",
      options: { hotspot: true },
      validation: (rule) => rule.required().error("An image is required"),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          description:
            "SEO-friendly description of the image for accessibility",
          validation: (rule) =>
            rule
              .required()
              .max(150)
              .warning("Alt text should be descriptive but concise"),
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Award", value: "award" },
          { title: "Certification", value: "certification" },
          { title: "Training", value: "training" },
          { title: "Recognition", value: "recognition" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      initialValue: "certification",
    }),
    defineField({
      name: "issuingOrganization",
      type: "string",
      title: "Issuing Organization",
      description: "Who issued this certificate/award",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateIssued",
      type: "date",
      title: "Date Issued",
      description: "When was this certificate/award received",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Currently Active",
      description: "Is this certification still valid/relevant",
      initialValue: true,
    }),
    defineField({
      name: "priority",
      type: "number",
      title: "Display Priority",
      description: "Lower numbers appear first in the carousel",
      validation: (rule) => rule.required().min(1).max(100),
      initialValue: 10,
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
  orderings: [
    {
      title: "Priority",
      name: "priorityAsc",
      by: [{ field: "priority", direction: "asc" }],
    },
    {
      title: "Date Issued (Newest First)",
      name: "dateIssuedDesc",
      by: [{ field: "dateIssued", direction: "desc" }],
    },
    {
      title: "Category",
      name: "categoryAsc",
      by: [{ field: "category", direction: "asc" }],
    },
  ],
});
