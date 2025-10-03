import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // This allows admins to crop images better
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "A short caption for the image.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",            // ✅ type is "reference"
      to: [{ type: "galleryCategory" }],
      description: "Select a category for this gallery image (e.g. Education Empowerment).",
      // validation: (Rule) => Rule.required(), // uncomment if mandatory
    }),
  ],
  preview: {
    select: {
      title: "caption",
      media: "image",
      category: "category.title",
    },
    prepare(selection) {
      const { title, media, category } = selection;
      return {
        title: title || "Gallery image",
        subtitle: category ? `Category: ${category}` : "No category",
        media,
      };
    },
  },
});
