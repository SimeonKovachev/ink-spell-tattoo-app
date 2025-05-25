// ./sanity/schemas/siteAlert.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteAlert",
  title: "Site-wide Alert",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      title: "Show alert?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "message",
      title: "Message (plain text or simple HTML)",
      type: "text",
      rows: 3,
      validation: (R) => R.required().max(240),
    }),
    defineField({
      name: "variant",
      title: "Colour scheme",
      type: "string",
      options: {
        list: [
          { title: "Purple (brand)", value: "purple" },
          { title: "Yellow / warning", value: "yellow" },
          { title: "Red / error", value: "red" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "purple",
    }),
  ],
});
