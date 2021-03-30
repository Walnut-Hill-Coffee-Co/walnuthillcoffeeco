import styled from '@emotion/styled'
import React from 'react'
import { Container } from '../styles/Container'

const ServiceStyles = styled.div`
  margin: 6rem auto;
  display: grid;
  /* column-gap: 4rem; */
  margin-top: 40vh;
  min-height: 60vh;

  h1 {
    margin: 0;
    margin-top: 15rem;
  }

  h2 {
    margin: 0;
    line-height: calc(var(--lineHeight) / 1.5);
  }
  p {
   margin-top: 0;
   margin-bottom: 2rem;
    max-width: 100ch;
  }

  > article {
    display: grid;
    align-items: center;
    .gatsby-image-wrapper {
      align-self: stretch;
    }
  }

   @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    .full-width {
      grid-template-columns: 1fr 1fr;

      .content {
        padding-left: 4rem;
        margin: 0;
      }

      &:nth-child(even) {
        .content {
          padding: 0;
          padding-right: 4rem;
        }
      }
    }
  }
`

export default function GridContent(props) {
  console.log(props)
  return (
    <Container>
      <ServiceStyles>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      {/* {props.columns.map(({_rawContent}, index) => {
        let content = _rawContent.map(block => (<PortableText blocks={block} key={block._key} />))
        return (
          <article>{content}</article>
        )
      })} */}
      </ServiceStyles>
    </Container>
  )
}
