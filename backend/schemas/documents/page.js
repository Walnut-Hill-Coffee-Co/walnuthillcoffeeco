import { customSlugify } from "../../src/utils/customSlugify";

export default {
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        maxLength: 50,
        source: (doc) => `/${doc.title}`,
        slugify: customSlugify,
      },
    },
    {
      name: "navMenu",
      type: "reference",
      title: "Navigation menu",
      // weak: true, // uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: "navigationMenu" }],
      description: "Which nav menu should be shown if any",
    },
    {
      name: "content",
      type: "array",
      title: "Page Content",
      description: "Add, edit, and reorder sections",
      of: [{ type: "hero" }, { type: "bodySection" }, { type: "gridContent" }, {type: 'uiComponentRef'}],
    },
  ],
};
