import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Button from './Button';
import Header from './Header';
import SEO from './SEO';
import ThemeToggle from './ThemeToggle';
import UniversalLink from './UniversalLink';

const FooterStyles = styled.footer`
  padding-top: 10vh;
  padding-bottom: 5vh;
  background-color: var(--black);
  > div {
    width: 90%;
    max-width: var(--maxWidth);
    margin: 0 auto;

    color: white;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 1fr 1fr;

      h5 {
        margin-top: 0;
      }
    }

    h5 {
      text-transform: uppercase;
      color: white;
      letter-spacing: 1px;
      text-align: center;
    }

    .social-icons {
      display: flex;
      gap: 2rem;
      justify-content: center;

      a {
        font-size: 3rem;
        color: white;
      }
    }

    .contact-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-column-start: 2;
      grid-row: 1 / span 2;

      p {
        margin: 2rem 0;
      }
    }
  }
`;

export default function Layout({ children }) {
  const [fontTheme, setFontTheme] = useState({
    body: 'aktiv-grotesk',
    heading: 'classico-urw',
  });
  function toggleTheme(e) {
    setFontTheme((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <ThemeToggle fontTheme={fontTheme} toggleTheme={toggleTheme} />
      <SEO bodyClass={`heading--${fontTheme.heading} body--${fontTheme.body}`} title="Home" />
      <Global
        styles={css`
          html {
            --red: #ff0000;
            --black: #222526;
            --grey: #3a3a3a;
            --gray: var(--grey);
            --lightGrey: #e1e1e1;
            --lightGray: var(--lightGrey);
            --offWhite: #ededed;
            --maxWidth: 1440px;
            --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
            --headingFont: 'classico-urw';
            --lineHeight: 1.75;
            --fontStackHeading: var(--headingFont), Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',
              'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
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
            &.heading--classico-urw {
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: 'classico-urw';
              }
            }
            &.heading--ivypresto-display {
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: 'ivypresto-display';
              }
            }
            &.heading--p22-mackinac-pro {
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: 'p22-mackinac-pro';
              }
            }

            &.body--aktiv-grotesk {
              font-family: 'aktiv-grotesk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
                Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            &.body--courier-std {
              font-family: 'courier-std', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
                Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            font-size: 18px;
            padding: 0;
            margin: 0;
            /* font-size: 1.5rem; */
            line-height: var(--lineHeight);
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--fontStackHeading);
          }

          h1 {
            font-size: 3.052rem;
          }
          h2 {
            font-size: 2.441rem;
          }
          h3 {
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
            color: var(--lightGray);
          }

          .gatsby-image-wrapper {
            filter: grayscale(100);
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <FooterStyles>
        <div>
          <StaticImage src="../images/logo.png" width={300} layout="fixed" />
          <div className="social-box">
            <h5>Follow us.</h5>
            <div className="social-icons">
              <UniversalLink to="https://www.facebook.com/walnuthillcoffeeco">
                <FaFacebook />
              </UniversalLink>
              <UniversalLink to="https://www.instagram.com/walnuthillcoffeeco">
                <FaInstagram />
              </UniversalLink>
            </div>
          </div>
          <div className="contact-box">
            <h5>Get in touch.</h5>
            <Button buttonStyle="primary">Contact us</Button>
            <p>
              102 1st Ave. NW <br />
              Winchester, TN 37398
            </p>
          </div>
        </div>
      </FooterStyles>
    </>
  );
}
