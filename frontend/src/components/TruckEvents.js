import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import EventCard from "./EventCard";

const TruckEventStyles = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: 10vh 0;
`

export default function TruckEvents() {
  const {
    allSanityEvent: { nodes },
  } = useStaticQuery(TRUCK_EVENT_QUERY);
  console.log(nodes)
  return (
    <TruckEventStyles>
      {nodes?.map((node, index) => (
        <EventCard key={node.id} {...node} />
      ))}
    </TruckEventStyles>
  );
}

export const TRUCK_EVENT_QUERY = graphql`
  {
    allSanityEvent(
      filter: { coffeeTruckUsed: { eq: "yes" } }
      sort: { fields: eventStart, order: ASC }
    ) {
      nodes {
        ...EventFragment
      }
    }
  }
`;
