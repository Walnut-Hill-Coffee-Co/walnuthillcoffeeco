import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import useMenuState from "../../hooks/useMenuState";

const MenuToggleStyles = styled.button`
  /* height: 3rem; */
  /* width: 4rem; */
  padding: 0.75rem 1rem;
  border-radius: 4px;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  z-index: 3000;
  cursor: pointer;
  font-size: var(--fontSizeDefault);
  background-color: var(--lightGray);
  border: none;
  display: flex;
  align-items: center;
  box-shadow: var(--bs);
  background-color: var(--orange);
  color: var(--black);
  transition: background-color 0.2s ease-in-out;
  &:hover,
  &:focus {
    outline-color: var(--blue);
    background-color: var(--tan);
  }

  > span:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 1ch;
    &,
    &::before,
    &::after {
      background-color: var(--black);
      display: inline-block;
      width: 12px;
      height: 2px;
      transition: all 0.2s ease;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.25em;
    }
    &::after {
      top: 0.25em;
    }
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      span:first-of-type {
        background-color: transparent;
        &::before {
          transform: rotate(45deg);
          top: 0;
        }
        &::after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    `}
`;

export default function MenuToggle({ toggle, isOpen }) {
  const { browserWidth, isMenuOpen, toggleMenu } = useMenuState();

  if (browserWidth < 750) {
    return (
      <MenuToggleStyles
        isMenuOpen={isOpen}
        onClick={toggle}
        aria-label="Toggle Menu"
      >
        <span>&nbsp;</span>
        <span>Menu</span>
      </MenuToggleStyles>
    );
  } else {
    return null;
  }
}
