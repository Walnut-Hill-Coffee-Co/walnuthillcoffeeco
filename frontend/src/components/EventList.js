import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import EventCard from "./EventCard";
import { Container } from "./styles/Container";

const EventListStyles = styled.div`
  display: grid;
  margin-top: 10vh;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;
export default function EventList() {
  const {
    allSanityEvent: { edges },
  } = useStaticQuery(EVENT_QUERY);
  return (
    <Container>
      <h1>What are we up to?</h1>
      <p>
        Check back often to find out about public and private events, including
        where the little white truck is today!{" "}
      </p>
      <EventListStyles>
        {edges &&
          edges.map(({ node }) => <EventCard key={node.id} {...node} />)}
      </EventListStyles>
    </Container>
  );
}

export const EVENT_QUERY = graphql`{
  allSanityEvent(sort: {eventStart: ASC}, filter: {eventInPast: {eq: false}}) {
    edges {
      node {
        ...EventFragment
      }
    }
  }
}`;
