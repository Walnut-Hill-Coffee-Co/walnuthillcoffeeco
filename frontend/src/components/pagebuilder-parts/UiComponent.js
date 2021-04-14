import React from 'react';
import EventList from '../EventList';
import BookingForm from '../forms/BookingForm';
import ContactForm from '../forms/ContactForm';
import TruckEvents from '../TruckEvents';

export default function UiComponent({location, ...rest}) {
console.log(rest)
  switch (rest.name) {
    case "eventList":
      return <EventList />
    case "contactForm":
      return <ContactForm />
    case "bookingForm":
      return <BookingForm />
    case "truckSchedule":
      return <TruckEvents />
    default:
      break;
  }
  return (
    <div>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
    </div>
  )
}
