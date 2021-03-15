import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from './Button';

const HeroStyles = styled.div`
  position: relative;
  min-height: 70vh;

  > .gatsby-image-wrapper {
    min-height: 70vh;
    clip-path: url(#myCurve);
  }

  .inner-content {
    flex-direction: column;
    gap: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0;
      line-height: calc(var(--lineHeight) / 1.25);
      text-align: center;
      font-size: 2.441rem;
      color: var(--offWhite);
    }
  }
`;

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
    <>
      <HeroStyles>
        <GatsbyImage image={image} loading="eager" alt="friends enjoying coffee" />
        <div className="inner-content">
          <h1>
            Handcrafted coffee
            <br /> made with love.
          </h1>
          {/*  <StaticImage src="../images/logo.png" alt="logo" layout="constrained" width={300} /> */}
          <Button size="small" to="/menu/" type="button" buttonStyle="primary" style={{ background: 'red' }}>
            View Menu
          </Button>
        </div>
      </HeroStyles>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
									L 0,0
									L 1,0
									L 1, .85
									C .8 .95, .2 .95, 0 .85
									Z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
