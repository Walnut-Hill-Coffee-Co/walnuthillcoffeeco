import styled from '@emotion/styled'
import React from 'react'
import PortableText from './PortableText'

const EventStyles = styled.article`
  background-color: var(--lightGray);
  box-shadow: var(--bs);

  > div {
    padding: 2rem;
  }
`
export default function EventCard({id, title, _rawDescription, location: {lat, lng}, eventType, coffeeTruckUsed, eventStart, eventEnd}) {
  return (
    <EventStyles>
      <iframe
              src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&zoom=15&key=${process.env.GATSBY_GOOGLE_MAP_API_KEY}&attribution_source=Google+Maps+Embed+API&attribution_web_url=https://developers.google.com/maps/documentation/embed/`}
              frameBorder="0"
              width="100%"
              height="350"
              title={`Google map `}
            />
      <div>
        <h3>{title}</h3>
        <small>{eventType === 'private' && <span>PRIVATE</span>} {coffeeTruckUsed === 'yes' && <span>coffee truck icon</span>}</small>
        <h6>Starts: <span>{eventStart - eventEnd}</span></h6>
        {_rawDescription && <PortableText blocks={_rawDescription} />}
      </div>
    </EventStyles>
  )
}
