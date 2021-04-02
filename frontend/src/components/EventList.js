import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function EventList() {
   const data = useStaticQuery(graphql`
    {
      allSanityEvent {
        edges {
          node {
            id
            title
            coffeeTruckUsed
            date(formatString: "MMM DD, YYYY h:mm", locale: "en-USA")
            eventStart
            eventType
            slug {
              current
            }
            location {
              lng
              lat
              alt
              _type
              _key
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      event list
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
