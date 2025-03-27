import { defineField, defineType } from "sanity";

export default defineType({
  name: "flashPromo",
  type: "document",
  title: "Flash Tattoo Promo",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Промо Заглавие",
      validation: (rule) => rule.required().max(150).warning("Keep it short"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Кратко описание",
      validation: (rule) =>
        rule.max(500).warning("Keep the description concise"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Основна картинка (примерен дизайн)",
      options: { hotspot: true },
      validation: (rule) =>
        rule.required().error("An image is required for the flash promo"),
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "Валидна от (начална дата)",
    }),
    defineField({
      name: "validUntil",
      type: "datetime",
      title: "Валидна до (крайна дата)",
    }),
    defineField({
      name: "active",
      type: "boolean",
      title: "Активна ли е промоцията?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
