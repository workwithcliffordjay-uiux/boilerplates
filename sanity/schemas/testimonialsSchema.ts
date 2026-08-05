import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "projectName",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "message",
      title: "Testimonial Message",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Approved", value: "approved" },
          { title: "Rejected", value: "rejected" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isFeatured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "projectName",
      status: "status",
    },
    prepare(selection) {
      const { title, subtitle, status } = selection;
      return {
        title,
        subtitle: `${subtitle} • ${status}`,
      };
    },
  },
});
