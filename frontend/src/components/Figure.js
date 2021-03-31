import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";
import { sanity } from "../../client-config";

export default function Figure({ node, layout = 'fullWidth', format = ['AUTO', 'WEBP','AVIF'] , gatsbyImageArgs = {aspectRatio: 1.78, placeholder: 'BLURRED'} }) {
  if (!node.asset) {
    return null;
  }
// layout: FULL_WIDTH, aspectRatio: 1.78, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF]

  const imageData = getGatsbyImageData(
    node.asset,
    { layout, format, ...gatsbyImageArgs },
    sanity
  );

  return <GatsbyImage image={imageData} alt={node.alt ||  ''} />;
}
