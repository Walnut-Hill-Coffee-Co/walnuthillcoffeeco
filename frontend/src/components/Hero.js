import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Hero() {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "hero-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const image = getImage(data.background);
  return (
    <div style={{ width: `100%` }}>
      <GatsbyImage image={image} alt="friends enjoying coffee" />
    </div>
  );
}
