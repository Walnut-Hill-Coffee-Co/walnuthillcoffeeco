import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeroStyles = styled.header`
  position: relative;

  ${({ isHomePage }) =>
    isHomePage ?
    css`
      min-height: 70vh;
      height: 90vh;

      > .gatsby-image-wrapper {
        min-height: 70vh;
        height: 90vh;
        clip-path: url(#myCurve);
      }
    `: css`
      min-height: 40vh;
      height: 60vh;

      > .gatsby-image-wrapper {
        min-height: 40vh;
        height: 60vh;
      }
    `}

  > .gatsby-image-wrapper {
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

    ${({ isHomePage }) =>
      isHomePage
        ? css`
            h1 {
              margin: 0;
              line-height: calc(var(--lineHeight) / 1.25);
              text-align: center;
              font-size: 2.441rem;
              color: var(--black);
              font-weight: 400;
              > p {
                margin: 0;
              }
            }
          `
        : css`
            h1 {
              padding: 0.5rem 0.75rem;
              color: var(--offWhite);
              background-color: rgba(0, 0, 0, 0.5);
              > p {
                margin: 0;
              }
            }
          `}

    &.service {
      h1 {
        padding: 0.5rem 0.75rem;
        color: var(--offWhite);
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
