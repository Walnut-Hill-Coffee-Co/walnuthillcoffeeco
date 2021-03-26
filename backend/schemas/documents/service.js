import { FaBarcode } from "react-icons/fa";
import { customSlugify } from "../../src/utils/customSlugify";
export default {
  type: "document",
  name: "service",
  title: "Services",
  icon: FaBarcode,
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      subtitle: "serviceLink.current",
    },
    prepare: ({ title, media, subtitle }) => {
      return {
        title,
        media: media?.image || "",
        subtitle: `Route: ${subtitle}`,
      };
    },
  },
  fields: [
    {
      type: "illustration",
      name: "featuredImage",
    },
    {
      type: "text",
      name: "title",
      rows: 2,
      title: "Service Headline",
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .error("The headline must be less than 100 characters in length"),
      description:
        "Add a catchy headline. You can split onto two lines if desired.",
    },
    {
      type: "text",
      name: "excerpt",
      title: "Service Excerpt",
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .error("The excerpt must be less than 200 characters in length"),
      description:
        "Add a catchy excerpt. You can split onto up to 3 lines if desired.",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        maxLength: 50,
        source: (doc) => `/services/${doc.title}`,
        slugify: customSlugify
      },
    },
    {
      name: 'description',
      type: 'gridContent',
      title: 'Page Content'
    }
  ],
};
