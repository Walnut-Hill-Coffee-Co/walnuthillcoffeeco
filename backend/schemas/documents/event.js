import { FaCalendar } from "react-icons/fa";

export default {
  title: 'Events',
  name: 'event',
  type: 'document',
  icon: FaCalendar,
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title',
    },
    {
      title: 'Event Date/Time',
      type: 'datetime',
      name: 'date'
    },
    {
      title: 'Event Location',
      name: 'location',
      type: 'geopoint'
    },
    {
      title: 'Event Description',
      type: 'simpleBlockContent',
      name: 'description'
    }
  ]
}