import styled from "@emotion/styled";
import React from "react";
import UniversalLink from "./UniversalLink";

const ButtonStyles = styled(UniversalLink)`
  transition: all 0.3s;
  /* transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31); */
  &.btn {
    background: none;
    padding: 1rem 3rem;
    display: flex;
    justify-content: center;
    border-radius: 3px;
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
      background: var(--green);
      color: var(--lightGray);
    }
    &--primary-outline {
      border: 1px solid var(--black);
    }

    &--black {
      background-color: var(--black);
      color: var(--offWhite);
      &:focus {
        outline-color: var(--black);
      }
    }

    &--dark {
      background-color: var(--black);
      color: white;
      &:focus {
        outline-color: var(--black);
      }
    }

    &--blue {
      background-color: var(--blue);
      color: var(--lightGray);
      &:focus {
        outline-color: var(--blue);
      }
    }
    &--green {
      background-color: var(--green);
      color: var(--black);
      &:focus {
        outline-color: var(--green);
      }
    }
    &--tan {
      background-color: var(--tan);
      color: var(--black);
      &:focus {
        outline-color: var(--tan);
      }
    }
    &--orange {
      background-color: var(--orange);
      color: var(--black);
      &:focus {
        outline-color: var(--orange);
      }
    }

    &:hover,
    &:focus {
      filter: brightness(75%);
    }

    &:focus {
      outline-width: 2px;
      outline-offset: 4px;
    }

    &--small {
      padding: 0.75rem 2rem;
    }
  }
`;

export default function Button({
  to,
  children,
  className,
  buttonStyle,
  size = "",
  style,
}) {
  return (
    <ButtonStyles
      style={style}
      to={to}
      className={`btn btn__${className} btn--${size} btn--${buttonStyle}`}
    >
      {children}
    </ButtonStyles>
  );
}
