import styled from '@emotion/styled'
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
      {/**
       * @TODO - change backend schema from geopoint to lcoation/address group
       */}
      <div>
        <h3>{title}</h3>
        <small>{eventType === 'private' && <span>PRIVATE</span>} {coffeeTruckUsed === 'yes' && <span>coffee truck icon</span>}</small>
        <h6>Starts: <span>{eventStart - eventEnd}</span></h6>
        {_rawDescription && <PortableText blocks={_rawDescription} />}
      </div>
    </EventStyles>
  )
}
