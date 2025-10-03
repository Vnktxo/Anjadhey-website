// galleryCategory.ts - FIXED VERSION
import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryCategory",
  title: "Gallery Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower = shown first (1 = top)",
      validation: (Rule) =>
        Rule.integer().min(1).warning("Set 1 for the top category; higher numbers appear later.")
    })
  ],
  preview: {
    select: { title: "title", order: "order" },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: selection.order ? `order: ${selection.order}` : "no order set"
      };
    }
  }
});