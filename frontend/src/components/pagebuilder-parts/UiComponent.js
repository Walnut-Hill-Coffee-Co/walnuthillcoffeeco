import React from 'react';
import EventList from '../EventList';

export default function UiComponent(props) {
console.log(props)
  switch (props.name) {
    case "eventList":
      return <EventList />

    default:
      break;
  }
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
