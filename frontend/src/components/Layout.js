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
  > .inner-content {
    width: 90%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    color: white;
    display: grid;
    gap: 2rem;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    h5 {
      margin: 0;
      /* text-transform: uppercase; */
      letter-spacing: 1px;
      text-align: center;
    }

    @media all and (min-width: 768px) {
      align-items: flex-start;
    }

    .social-icons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      a {
        display: flex;
        align-items: center;
        font-size: 3rem;
        color: white;
      }
    }

    .contact-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        margin-top: 0;
        margin-bottom: 2rem;
      }
      p {
      }
      a {
        margin: auto;
        display: block;
      }

      /* @media all and (min-width: 768px) {
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
        h5 {
          width: 100%;
          margin-top: 0;
        }
      } */
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
        <div className="inner-content">
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
