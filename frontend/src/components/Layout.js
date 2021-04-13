import { css, Global } from "@emotion/react";
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from "./SEO";
export default function Layout({ children }) {
  return (
    <>
      <SEO title="Home" />
      <Global
        styles={css`
          html {
            --black: #090c08;
            --lightGrey: #e8e4d9;
            --lightGray: var(--lightGrey);
            --green: #6f907d;
            --blue: #293b48;
            --tan: #ae6445;
            --orange: #f7a27b;
            --offWhite: var(--lightGray);
            --maxWidth: 1440px;
            --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
            --headingFont: "ivypresto-display";
            --lineHeight: 1.75;
            --fontStackHeading: var(--headingFont), Cambria, "Hoefler Text",
              Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times,
              "Times New Roman", serif;
            --fontStackBody: "aktiv-grotesk", --apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            box-sizing: border-box;

            @media all and (min-width: 768px) {
              font-size: 112.5%;
            }
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-family: var(--fontStackBody);
            background: var(--lightGray);
            padding: 0;
            margin: 0;
            /* font-size: 1.5rem; */
            line-height: var(--lineHeight);

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: var(--fontStackHeading);
              font-weight: 300;
            }

            h1 {
              font-size: 3.052rem;
            }
            h2 {
              font-size: 2.441rem;
            }
            h3 {
              letter-spacing: 1px;
              font-size: 1.953rem;
            }
            h4 {
              font-size: 1.563rem;
            }
            h5 {
              font-size: 1.25rem;
            }
            h6 {
              font-size: 1rem;
            }
            a {
              text-decoration: none;
              color: var(--black);
            }
            a:hover {
              text-decoration: none;
              color: var(--orange);
            }

            .single-column {
              width: 100%;
              margin-top: 40vh;

              > h1 + p {
                margin: 0;
                max-width: 65ch;
              }

              h4 {
                margin: 0;
                font-weight: 500;
                font-family: var(--fontStackBody);
                text-transform: uppercase;
              }
            }
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
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
