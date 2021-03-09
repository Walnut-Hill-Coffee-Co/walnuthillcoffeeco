import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const UniversalLink = React.forwardRef(
  ({ children, to, className, activeClassName, partiallyActive, ...other }, ref) => {
    /**
     * Tailor the following test to your environment.
     * This example assumes that any internal link (intended for Gatsby)
     * will start with exactly one slash, and that anything else is external
     *
     */

    const internal = /^\/(?!\/)/.test(to);
    //  Use Gatsby Link for internal links and <a> for others
    if (internal) {
      return (
        <GatsbyLink
          ref={ref}
          to={to}
          className={className}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }
    return (
      <a ref={ref} href={to} className={className} {...other} target="_BLANK" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
);

export default UniversalLink;
