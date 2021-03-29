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
      _rawContent
      _type
    }
  }
  fragment ContentFragment on SanityBodySection {
    _rawContent
    _key
    _type
  }
`