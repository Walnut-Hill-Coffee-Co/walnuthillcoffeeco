import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";
import { sanity } from "../../client-config";

export default function Figure({ node, layout = 'fullWidth', formats = ['AUTO', 'WEBP','AVIF'] , gatsbyImageArgs = {aspectRatio: 1.78, placeholder: 'BLURRED'}, loading = 'lazy' ,}) {
  if (!node?.asset) {
    return null;
  }

  const imageData = getGatsbyImageData(
    node.asset,
    { layout, formats, ...gatsbyImageArgs },
    sanity
  );

  return <GatsbyImage objectFit={node?.objectFit || 'cover'}  loading={loading} image={imageData} alt={node.alt ||  ''} />;
}
