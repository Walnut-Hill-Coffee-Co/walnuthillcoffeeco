import React from "react";
import PortableText from "../PortableText";
import { Container } from "../styles/Container";

export default function BodySection(props) {
  return (
    <Container>
      <PortableText className="single-column" blocks={props._rawContent} />
    </Container>
  );
}
