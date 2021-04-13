import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image/'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import React from 'react'
import { sanity } from '../../../client-config'

const ImageGalleryStyles = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row dense;
  grid-auto-rows: 300px;

  .gatsby-image-wrapper {
    box-shadow: var(--bs);
    border-radius:5px;
    cursor: pointer;
  }
`
export default function ImageGallery({location, gallery}) {

  return (
    <ImageGalleryStyles>
      {gallery?.map((galleryItem, index) => {
        const imageData = getGatsbyImageData(galleryItem?._rawImage?.asset, {layout: "fullWidth", format: ["AUTO", "AVIF"]}, sanity)
        return (
        <GatsbyImage key={index} image={imageData} alt={galleryItem?._rawImage?.alt} />
      )})}
    </ImageGalleryStyles>
  )
}
