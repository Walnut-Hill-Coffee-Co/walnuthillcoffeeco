import styled from '@emotion/styled';
import React from 'react';
import UniversalLink from './UniversalLink';

const ButtonStyles = styled(UniversalLink)`
  transition: all 0.3s;
  /* transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31); */
  &.btn {
    background: none;
    padding: 1rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: max-content;
    position: relative;
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 0.5px;
    border: 0;
    cursor: pointer;
    box-shadow: var(--bs);

    &--primary {
      background: white;
      color: var(--black);
    }
    &--primary-outline {
      border: 1px solid var(--black);
    }

    &--dark {
      background-color: var(--black);
      color: white;
    }

    &:hover,
    &:focus {
      filter: brightness(85%) invert(100%);
    }
  }
`;

export default function Button({ to, children, className, buttonStyle }) {
  return (
    <ButtonStyles to={to} className={`btn btn__${className} btn--${buttonStyle}`}>
      {children}
    </ButtonStyles>
  );
}
