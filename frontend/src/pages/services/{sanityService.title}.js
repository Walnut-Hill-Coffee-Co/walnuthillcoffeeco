import styled from '@emotion/styled';
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import React from "react";
import { sanity } from '../../../client-config';
import AllLayouts from "../../components/AllLayouts";
import Layout from "../../components/Layout";
import { ServiceStyles } from '../../components/pagebuilder-parts/GridContent';
import SEO from "../../components/SEO";
import { HeroStyles } from "../../components/styles/HeroStyles";
const ServiceTemplateStyles = styled.div`

  ${ServiceStyles} {
    min-height: auto;
  }
`
export default function ServiceTemplate({  data, location }) {
  const { sanityService } = data;

  const {title, description} = sanityService
  const layouts = description || []

  const imageData = getGatsbyImageData(
    sanityService?._rawFeaturedImage?.image?.asset,
    { layout: 'FULL_WIDTH', format: ['AVIF', 'AUtO'] },
    sanity
  );


  return (
    <Layout>
      <SEO title={sanityService?.title} description={sanityService?.excerpt} />
      {/* {process.env.NODE_ENV === 'production' ? <PageUnderConstruction />: */}
      <>
        <HeroStyles isHomePage={location.pathname === '/'}>
          <GatsbyImage image={imageData} alt={sanityService?._rawFeaturedImage?.image?.alt || ''} />
          <div className="inner-content service">
            <h1>{title}</h1>
          </div>
        </HeroStyles>
        <ServiceTemplateStyles>
          {layouts.length > 0 && layouts.map((layout, index) => {
            return (
              <AllLayouts key={index} layoutData={layout} location={location} />
            )
          })}
        </ServiceTemplateStyles>
      </> {/* } */}
    </Layout>
  );
}

export const ServiceQuery = graphql`
  query ServiceQuery($id: String!) {
    sanityService(id: { eq: $id }) {
      title
      _id
      _rawFeaturedImage(resolveReferences: { maxDepth: 10 })
      excerpt
      description {
        __typename
        ...GridContentFragment
        ...ContentFragment
        ...UiComponent
        ...IllustrationFragment
        ...ImageGalleryFragment
      }
    }
  }
`;
