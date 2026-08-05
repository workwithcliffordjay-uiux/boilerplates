import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // 🔥 TECH STACK (SELECTABLE MULTI-SELECT)
    defineField({
      name: "stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Next.js", value: "Next.js" },
          { title: "Vue.js", value: "Vue.js" },
          { title: "React.js", value: "React.js" },
          { title: "Nuxt.js", value: "Nuxt.js" },

          { title: "Node.js", value: "Node.js" },
          { title: "Express.js", value: "Express.js" },

          { title: "Tailwind CSS", value: "Tailwind CSS" },
          { title: "CSS", value: "CSS" },

          { title: "Firebase", value: "Firebase" },
          { title: "Sanity", value: "Sanity" },
          { title: "Hasp CMS", value: "HaspCMS" },
          { title: "MongoDB", value: "MongoDB" },
          { title: "MySQL", value: "MySQL" },
        ],
      },
    }),

    defineField({
      name: "link",
      title: "Live URL",
      type: "url",
    }),

    defineField({
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web App", value: "web" },
          { title: "Landing Page", value: "landing" },
          { title: "CMS / Dashboard", value: "cms" },
          { title: "E-commerce", value: "ecommerce" },
          { title: "Full Stack", value: "fullstack" },
          { title: "Frontend", value: "frontend" },
          { title: "Systems", value: "systems" },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
