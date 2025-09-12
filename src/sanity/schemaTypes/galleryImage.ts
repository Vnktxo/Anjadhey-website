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
  ],
});
