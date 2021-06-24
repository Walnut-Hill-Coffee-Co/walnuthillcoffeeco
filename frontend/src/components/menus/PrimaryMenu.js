import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import useMenuState from '../../hooks/useMenuState';
import UniversalLink from '../UniversalLink';
import Sidedrawer from './Sidedrawer';

export default function PrimaryMenu() {
  const { browserWidth, isMenuOpen, closeMenu } = useMenuState();
  const {
    sanityNavigationMenu: { _rawItems },
  } = useStaticQuery(graphql`
    {
      sanityNavigationMenu(title: { eq: "Primary Navigation" }) {
        id
        _rawItems(resolveReferences: { maxDepth: 10 })
      }
    }
  `);

  useEffect(() => {
    if (browserWidth >= 750) {
      closeMenu();
    }
  }, [browserWidth]);
  if (browserWidth >= 750 && !!_rawItems) {
    return (
      <nav>
        <ul>
          {_rawItems.map(({ _key, route, sitePageRoute, link, title }) => (
            <li key={_key}>
              <UniversalLink activeClassName="nav-link__active" to={sitePageRoute?.slug?.current || route || link}>
                {title}
              </UniversalLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  if (browserWidth < 750) {
    return <Sidedrawer items={_rawItems} />;
  }

  return null;
}
