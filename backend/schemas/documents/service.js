import SlugInput from 'sanity-plugin-better-slug';
import { customSlugify } from '../../src/utils';
export default {
  type: "document",
  name: "service",
  title: "Services",
  // icon: FaBarcode,
  fields: [
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
      name: 'serviceLink',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        maxLength: 50,
        source: 'title',
        basePath: '/services',
        slugify: customSlugify
      }
    }
  ],
};
