import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Overrides the page title in search results and browser tabs.",
      validation: (Rule) => Rule.max(60).warning("Longer titles may be truncated by search engines."),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Shown as the snippet in search results.",
      validation: (Rule) => Rule.max(160).warning("Longer descriptions may be truncated by search engines."),
    }),

    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      options: { hotspot: true },
      description: "Used when this page is shared on social media. Falls back to the main image if left empty.",
    }),
  ],
  options: { collapsible: true, collapsed: true },
});
