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
      description:
        "Препоръчително: до 100 символа за перфектно показване на всички устройства",
      validation: (rule) =>
        rule
          .max(150)
          .error("Описанието не може да бъде повече от 150 символа!")
          .custom((description) => {
            if (!description) return true;

            const length = description.length;

            if (length > 100) {
              return "⚠️ Внимание: Над 100 символа може да се съкрати на малки екрани";
            }

            return true;
          }),
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
      description: "description",
    },
    prepare({ title, media, description }) {
      const charCount = description ? description.length : 0;
      const status = charCount > 100 ? "⚠️" : charCount > 0 ? "✅" : "";

      return {
        title: `${status} ${title}`,
        subtitle: description ? `${charCount} символа` : "Няма описание",
        media,
      };
    },
  },
});
