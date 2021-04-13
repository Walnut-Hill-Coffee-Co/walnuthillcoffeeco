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

  fragment IllustrationFragment on SanityIllustration {
    _type
    _key
    _rawImage(resolveReferences: { maxDepth: 10 })
  }

  fragment ImageGalleryFragment on SanityImageGallery {
    _key
    _type
    gallery {
      _rawImage(resolveReferences: { maxDepth: 10 })
    }
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
      ... on SanityIllustration {
        ...IllustrationFragment
      }
      ... on SanityUiComponentRef {
       ...UiComponent
      }
    }
  }
  fragment ContentFragment on SanityBodySection {
    _rawContent(resolveReferences: { maxDepth: 10 })
    _key
    _type
  }

  fragment EventFragment on SanityEvent {
    id
    title
    coffeeTruckUsed
    eventStart
    eventEnd
    eventType
    _rawDescription(resolveReferences: {maxDepth: 10})
    slug {
      current
    }
    location {
      address1
      city
      state
      name
    }
  }
`;
