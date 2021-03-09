import { css, Global } from '@emotion/react';
import React, { useState } from 'react';
import Header from './Header';
import SEO from './SEO';
import ThemeToggle from './ThemeToggle';

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
            --maxWidth: 1680px;
            --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
            --headingFont: 'classico-urw';
            --lineHeight: 2;
            --fontStackHeading: var(--headingFont), Cambria, 'Hoefler Text', Utopia, 'Liberation Serif',
              'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif;
            box-sizing: border-box;
            font-size: 10px;
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
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            line-height: 2;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--fontStackHeading);
            text-transform: capitalize;
          }
          a {
            text-decoration: none;
            color: var(--black);
          }
          a:hover {
            text-decoration: none;
            color: var(--lightGray);
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <footer>
        This is the footer {fontTheme.body} {fontTheme.heading}
      </footer>
    </>
  );
}
