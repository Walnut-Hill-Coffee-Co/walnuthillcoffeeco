import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image/";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";
import { sanity } from "../../../client-config";
import { Container } from "../styles/Container";

const ImageGalleryStyles = styled.div`
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row dense;
  grid-auto-rows: 300px;

  .gatsby-image-wrapper {
    box-shadow: var(--bs);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
`;
export default function ImageGallery({ location, gallery }) {
  return (
    <Container as="section">
      <ImageGalleryStyles>
        {gallery?.map((galleryItem, index) => {
          const imageData = getGatsbyImageData(
            galleryItem?._rawImage?.asset,
            { layout: "fullWidth", format: ["AUTO", "AVIF"] },
            sanity
          );
          return (
            <GatsbyImage
              key={index}
              image={imageData}
              alt={galleryItem?._rawImage?.alt}
            />
          );
        })}
      </ImageGalleryStyles>
    </Container>
  );
}
