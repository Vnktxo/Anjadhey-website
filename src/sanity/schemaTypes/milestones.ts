import { defineField, defineType } from "sanity";

export default defineType({
  name: "milestone",
  title: "Milestone",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: 'The year of the milestone, e.g., "2024".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location(s)",
      type: "string",
      description: 'The location of the event, e.g., "Thanjavur".',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the milestone.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Year, Newest First",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
