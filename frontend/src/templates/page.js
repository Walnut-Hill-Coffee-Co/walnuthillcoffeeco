import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AllLayouts from "../components/AllLayouts";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function PageTemplate({
  data: { sanityPage, sanityRoute },
  location,
}) {
  const { content, title, id } = sanityPage;
  const { _rawOpenGraph } = sanityRoute;
  const layouts = content || [];
  const newLocation = location.pathname.split('/').join('')

  if(location.pathname !== '/'){
    return <Layout>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <StaticImage src="../images/favicon.png" layout="fixed" width={300} />
        <h1>Page under construction!</h1>
        <p>We're currently building something awesome! Check back shortly for new updates!</p>
      </div>

    </Layout>
  }
  return (
    <Layout>
      <SEO
        bodyClass={newLocation ? newLocation : 'home-page'}
        title={_rawOpenGraph?.title || title}
        description={_rawOpenGraph?.description}
      />
      {/* <pre>{JSON.stringify({sanityPage, sanityRoute}, null, 2)}</pre> */}
      {layouts.length > 0 &&
        layouts.map((layout, index) => {
          return (
            <AllLayouts key={index} location={location} layoutData={layout} />
          );
        })}
    </Layout>
  );
}

export const PageTemplateQuery = graphql`
  query PAGE_TEMPLATE_QUERY($id: String!, $routeId: String!) {
    sanityPage(id: { eq: $id }) {
      title
      id
      content {
        __typename
        ...UiComponent
        ...HeroFragment
        ...GridContentFragment
        ...ContentFragment
      }
    }
    sanityRoute(id: { eq: $routeId }) {
      _rawOpenGraph
    }
  }
`;
