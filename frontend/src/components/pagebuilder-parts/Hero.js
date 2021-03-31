import styled from "@emotion/styled";
import React from "react";
import Button from "../Button";
import Figure from "../Figure";
import PortableText from "../PortableText";

const HeroStyles = styled.div`
  position: relative;
  min-height: 70vh;

  > .gatsby-image-wrapper {
    min-height: 70vh;
    clip-path: url(#myCurve);
    filter: brightness(80%);
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
      > p {
        margin: 0;
      }
    }

    a {
      color: white;
    }
  }
`;

export default function Hero(props) {
  console.log(props._rawCta.backgroundColor.colors.value);
  return (
    <>
      <HeroStyles>
        <Figure node={props._rawIllustration.image} />
        {/* <GatsbyImage image={image} loading="eager" alt="friends enjoying coffee" /> */}
        <div className="inner-content">
          {props?._rawHeading && (
            <h1>
              <PortableText blocks={props?._rawHeading} />
            </h1>
          )}
          {props?._rawCta?.kind === "button" && props?._rawCta?.link && (
            <Button size="small" to={props?._rawCta.link} type="button" style={{backgroundColor: props._rawCta.backgroundColor.colors.value}}>
              View Menu
            </Button>
          )}
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
