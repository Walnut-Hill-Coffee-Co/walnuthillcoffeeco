import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import EventCard from "./EventCard";
import { Container } from "./styles/Container";

const TruckEventStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: 10vh 0;
`;

export default function TruckEvents() {
  const {
    allSanityEvent: { nodes },
  } = useStaticQuery(TRUCK_EVENT_QUERY);
  console.log(nodes.length);
  return (
    <Container as="section">
      {nodes.length> 0 && <TruckEventStyles>
        {nodes?.map((node, index) => (
          <EventCard key={node.id} {...node} />
        ))}
      </TruckEventStyles>}
        {nodes.length ===0 && <p>No currently scheduled events...</p>}
    </Container>
  );
}

export const TRUCK_EVENT_QUERY = graphql`
  {
    allSanityEvent(
      filter: { coffeeTruckUsed: { eq: "yes" }, eventInPast: { eq: false } }
      sort: { fields: eventStart, order: ASC }
    ) {
      nodes {
        ...EventFragment
      }
    }
  }
`;
