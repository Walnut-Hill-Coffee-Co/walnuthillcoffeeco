import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Figure from './Figure';
import UniversalLink from './UniversalLink';
import MenuToggle from './menus/MenuToggle'
import PrimaryMenu from './menus/PrimaryMenu';

const StyledHeader = styled.header`
  max-width: var(--maxWidth);
  margin: 2rem auto 4rem;
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
  padding: 0 2rem;
  ${({hasDarkBackground}) => hasDarkBackground && css`
    .gatsby-image-wrapper {
      filter: invert();
    }

    > nav > ul li a {
      color: var(--black) !important;
    }
  `}
  > nav {
    /* flex: 1; */
    margin-left: 1rem;
    .nav-link__active {
      color: var(--orange);
    }
     ul {
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
        border-top: 1px solid var(--orange);
        line-height: calc(var(--lineHeight) / 1.5);
        text-transform: lowercase;
        transition: border 1000ms ease color 1000ms ease-in;
        &:not(:last-of-type) {
          margin-right: 2rem;
        }
        &:hover,
        &:focus-within {
          border-bottom: 1px solid var(--orange);
          a {
          outline: none;
            color: var(--orange);
          }
        }

        &:focus-within {
          a {
            color: var(--white);
          }
        }
        a {
          font-weight:lighter;
          color: var(--white);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 4rem
  }
`;
export default function Header({isSubmissionConfirmation}) {
   const {sanitySiteSettings} = useStaticQuery(graphql`
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

    }
  `)
  return (
    <StyledHeader hasDarkBackground={isSubmissionConfirmation}>
      <UniversalLink to="/">
        <Figure node={sanitySiteSettings?.headerLogo} alt={sanitySiteSettings.title} gatsbyImageArgs={{width: 200, layout: 'constrained'}} />
      </UniversalLink>
      <PrimaryMenu />
    </StyledHeader>
  );
}
