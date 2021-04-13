import styled from "@emotion/styled";
import React from "react";
import Figure from "../Figure";
import PortableText from "../PortableText";
import { Container } from "../styles/Container";
import UiComponent from "./UiComponent";

const ServiceStyles = styled.div`
  margin: 6rem auto;
  display: grid;
  /* column-gap: 4rem; */
  margin-top: 40vh;
  min-height: 60vh;

  &:last-of-type {
    column-gap: 4rem;
  }


  h2 {
    margin: 0;
    line-height: calc(var(--lineHeight) / 1.5);
  }
  p {
    margin-top: 0;
    margin-bottom: 2rem;
    max-width: 100ch;
  }

  > .content {
    .gatsby-image-wrapper {
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 2rem 0;
    p {
      margin: 2rem 0;
    }
  }

  .has-content-image {
    margin: 0;
    padding: 0;
    h2 {
      margin-top: 2rem;
    }

    p {
      flex: 1;
    }


  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .content:nth-child(even):not('.has-content-image') {
      padding-left: 4rem;
    }

  }
`;

export default function GridContent(props) {
  const gridColumnCount = props.columns.length;
  return (
    <Container>
      <ServiceStyles cols={gridColumnCount}>
        {props.columns.map((block, index) => {

          switch (block?._type) {
            case "illustration":
              return (
                <Figure key={index} node={block._rawImage} alt={block.alt}  />
              );
            case "singleColumn":
              let content = block._rawContent.map((block) => (
                <PortableText
                  key={block._key}
                  blocks={block}
                  key={block._key}
                />
              ));
          const singleColWithImage = block._rawContent[0]._type === 'mainImage'
              return (
                <article className={`content ${singleColWithImage ? 'has-content-image': ''}`} key={index}>
                  {content}
                </article>
              );
            case "uiComponentRef":
              return <UiComponent {...block} key={index} />
            default:
              break;
          }
        })}
      </ServiceStyles>
    </Container>
  );
}
