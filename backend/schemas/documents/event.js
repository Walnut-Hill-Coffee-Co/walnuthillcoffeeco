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
  initialValue: {
    eventType: 'public',
    coffeeTruckUsed: 'yes'
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
      title: 'Event Type',
      name: 'eventType',
      type: 'string',
      options: {
        list: [
          'public', 'private'
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      title: 'Coffee Truck Involvement',
      name: 'coffeeTruckUsed',
      description: 'Will the coffee truck be used at this event?',
      type: 'string',
      options: {
        list: [
          'yes', 'no'
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
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
      name: "eventEnd",
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
