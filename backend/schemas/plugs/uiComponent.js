import _startCase from 'lodash.startcase';
import { CgComponents } from 'react-icons/cg';
import { GrContact } from 'react-icons/gr';
import { MdEvent } from 'react-icons/md';
export default {
  type: "object",
  name: "uiComponentRef",
  title: "UI Component",
  icon: CgComponents,
  fields: [
    {
      description: "This is for adding a reference to specific UI components.",
      type: "string",
      name: "name",
      title: 'Render Component',
      options: {
        list: [{ title: "Event List", value: 'eventList' }, {title: 'Contact Form', value: 'contactForm'}, {title: 'Booking Form', value: 'bookingForm'},{title: 'Truck Schedule', value: 'truckSchedule'}],
        layout: 'radio',
        direction: 'horizontal'
      },
    },
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      const media = title === 'eventList'|| 'uiComponentRef' ? MdEvent : GrContact

      return {
        title: _startCase(title),
        media
      };
    },
  },
};
