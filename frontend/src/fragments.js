import { graphql } from "gatsby";

export const fragments = graphql`
  fragment UiComponent on SanityUiComponentRef {
    _key
    _type
    name
  }
  fragment HeroFragment on SanityHero {
    _rawCta
    _rawHeading
    _rawIllustration
    _type
    _key
  }
  fragment GridContentFragment on SanityGridContent {
    _key
    _type
    columns {
      ... on SanitySingleColumn {
        _key
        _type
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
      ...on SanityIllustration {
        _rawImage(resolveReferences: {maxDepth: 10})
      }
    }
  }
  fragment ContentFragment on SanityBodySection {
    _rawContent(resolveReferences: { maxDepth: 10 })
    _key
    _type
  }
`;
