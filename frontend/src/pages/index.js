import styled from '@emotion/styled';
import * as React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const StyledH1 = styled.h1`
  color: var(--red);
`;
export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <StyledH1>hi from a heading</StyledH1>
      <p>hi whats new? some more text</p>
    </Layout>
  );
}
