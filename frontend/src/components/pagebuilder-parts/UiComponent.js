import React from 'react';
import EventList from '../EventList';
import TruckEvents from '../TruckEvents';

export default function UiComponent({location, ...rest}) {
console.log(rest)
  switch (rest.name) {
    case "eventList":
      return <EventList />
    case "contactForm":
      return <span>Contact form</span>
    case "bookingform":
      return <h1>Booking form</h1>
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
