import styled from '@emotion/styled';
import React from 'react';

const StyledThemeToggle = styled.div`
  background-color: #ccc;
  padding: 2rem;
  display: inline-block;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  grid-gap: 1rem;
  z-index: 100000;
  > label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export default function ThemeToggle({ fontTheme, toggleTheme }) {
  return (
    <StyledThemeToggle>
      <label htmlFor="heading">
        Heading Font
        <select name="heading" id="heading" defaultValue={fontTheme.heading} onChange={toggleTheme}>
          <option value="classico-urw">Classico URW</option>
          <option value="ivypresto-display">IvyPresto Display</option>
          <option value="p22-mackinac-pro">P22 Mackinac Pro</option>
        </select>
      </label>
      <label htmlFor="body">
        Body Font
        <select name="body" id="body" defaultValue={fontTheme.body} onChange={toggleTheme}>
          <option value="aktiv-grotesk">Aktiv Grotesk</option>
          <option value="courier-std">Courier STD</option>
        </select>
      </label>
    </StyledThemeToggle>
  );
}
