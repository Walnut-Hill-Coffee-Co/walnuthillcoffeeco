import { FaCalendar } from "react-icons/fa";
import { customSlugify } from "../../src/utils/customSlugify";

export default {
  title: "Events",
  name: "event",
  type: "document",
  icon: FaCalendar,
  preview: {
    select: {
      title: "title",
      subtitle: "eventStart",
    },
    prepare: ({ title, subtitle }) => {
      // const formattedDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'long', timeStyle: 'medium'}).format(subtitle)
      // const time = formattedDate.toLocaleTimeString('en-US')
      // const date = formattedDate.toLocaleDateString('en-US')
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      }).format(new Date(subtitle));
      return {
        title,
        subtitle: formattedDate,
      };
    },
  },
  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        maxLength: 50,
        source: (doc) => `/events/${doc.title}`,
        slugify: customSlugify,
      },
    },
    {
      title: "Event Start",
      type: "datetime",
      name: "eventStart",
      options: {
        dateFormat: "LLL",
        timeStep: 15,
        calandarTodayLabel: "Today",
      },
    },
    {
      title: "Event End",
      type: "datetime",
      name: "date",
      options: {
        dateFormat: "LLL",
        timeStep: 15,
        calandarTodayLabel: "Today",
      },
    },
    {
      title: "Event Location",
      name: "location",
      type: "geopoint",
    },
    {
      title: "Event Description",
      type: "simpleBlockContent",
      name: "description",
    },
  ],
};
