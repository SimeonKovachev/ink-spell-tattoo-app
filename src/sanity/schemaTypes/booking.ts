import { defineField, defineType } from "sanity";

export default defineType({
  name: "booking",
  type: "document",
  title: "Booking",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required().max(100).error("Name is required"),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (rule) =>
        rule.required().email().error("Valid email is required"),
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone",
      validation: (rule) =>
        rule.required().regex(/^\+?\d{7,15}$/, {
          name: "phone number",
          invert: false,
        }),
    }),
    defineField({
      name: "appointmentDate",
      type: "date",
      title: "Appointment Date",
      validation: (rule) =>
        rule.required().error("Appointment date is required"),
    }),
    defineField({
      name: "message",
      type: "text",
      title: "Message",
      validation: (rule) => rule.max(500).warning("Keep the message concise"),
    }),
    defineField({
      name: "timeSlot",
      type: "string",
      title: "Time Slot (HH:mm)",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
