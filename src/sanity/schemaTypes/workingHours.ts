import { defineType, defineField } from "sanity";

export default defineType({
  name: "workingHours",
  type: "document",
  title: "Working Hours",
  fields: [
    defineField({
      name: "day",
      type: "string",
      title: "Day of the Week",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startTime",
      type: "string",
      title: "Start Time",
      description: "Format: HH:mm",
    }),
    defineField({
      name: "endTime",
      type: "string",
      title: "End Time",
      description: "Format: HH:mm",
    }),
    defineField({
      name: "isClosed",
      type: "boolean",
      title: "Is Closed?",
      initialValue: false,
    }),
    defineField({
      name: "specialNote",
      type: "string",
      title: "Special Note",
      description: "Optional note for special hours (e.g., holidays)",
    }),
  ],
});
