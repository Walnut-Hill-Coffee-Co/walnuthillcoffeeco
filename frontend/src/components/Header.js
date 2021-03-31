import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Figure from './Figure';
import UniversalLink from './UniversalLink';


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
    .nav-link__active {
      color: var(--tan);
    }
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
        border-top: 1px solid var(--tan);
        line-height: calc(var(--lineHeight) / 1.5);
        text-transform: lowercase;
        transition: border 1000ms ease color 1000ms ease-in;
        &:not(:last-of-type) {
          margin-right: 2rem;
        }
        &:hover,
        &:focus-within {
          border-bottom: 1px solid var(--tan);
          a {
          outline: none;
            color: var(--tan);
          }
        }
        a {
          color: var(--lightGray);
        }
      }
    }
  }
`;
export default function Header() {

   const {sanitySiteSettings, sanityNavigationMenu: {_rawItems}} = useStaticQuery(graphql`
    {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        title
        headerLogo {
          asset {
            url
            id
            _id
          }
        }
      }
      sanityNavigationMenu(title: {eq: "Primary Navigation"}) {
        id
        _rawItems(resolveReferences: {maxDepth: 10})
      }
    }
  `)
  return (
    <StyledHeader>
      <UniversalLink to="/">
        <Figure node={sanitySiteSettings?.headerLogo} alt={sanitySiteSettings.title} gatsbyImageArgs={{width: 200, layout: 'constrained'}} />
      </UniversalLink>
      <nav>
        <ul>
          {_rawItems.map(({ _key, route, sitePageRoute, link, title }) => {
            return (
            <li key={_key}>
              <UniversalLink activeClassName="nav-link__active" to={sitePageRoute?.slug?.current || route || link}>{title}</UniversalLink>
            </li>
          )})}
        </ul>
      </nav>
    </StyledHeader>
  );
}
