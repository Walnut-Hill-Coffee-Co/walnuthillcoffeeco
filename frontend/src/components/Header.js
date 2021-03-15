import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import UniversalLink from './UniversalLink';

const navLinks = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Menu',
    to: 'https://store.walnuthillcoffeeco.com',
  },
  {
    name: 'Events',
    to: '/events/',
  },
  {
    name: 'Contact',
    to: '/contact/',
  },
];

const StyledHeader = styled.header`
  max-width: var(--maxWidth);
  margin: 2rem auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 500;
  align-items: start;
  padding: 0 4rem;
  > nav {
    /* flex: 1; */
    margin-left: 1rem;

    > ul {
      justify-content: end;
      margin: 0;
      margin-top: 1rem;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: 1rem;

      li {
        letter-spacing: 0.5px;
        border-top: 1px solid var(--lightGray);
        line-height: calc(var(--lineHeight) / 1.5);
        text-transform: lowercase;
        transition: border 1000ms ease color 1000ms ease-in;
        &:not(:last-of-type) {
          margin-right: 2rem;
        }
        &:hover,
        &:focus {
          border-bottom: 1px solid var(--lightGray);

          a {
            color: var(--black);
          }
        }
        a {
          color: var(--offWhite);
        }
      }
    }
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <UniversalLink to="/">
        <StaticImage src="../images/logo.png" width={200} placeholder="blurred" alt="logo" layout="fixed" />
      </UniversalLink>
      <nav>
        <ul>
          {navLinks.map(({ name, to }) => (
            <li key={name}>
              <UniversalLink to={to}>{name}</UniversalLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
}
