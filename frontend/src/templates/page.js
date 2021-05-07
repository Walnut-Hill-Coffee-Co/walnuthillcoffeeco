import { graphql } from "gatsby";
import React from "react";
import AllLayouts from "../components/AllLayouts";
import Layout from "../components/Layout";
import PageUnderConstruction from "../components/PageUnderConstruction";
import SEO from "../components/SEO";

export default function PageTemplate({
  data: { sanityPage, sanityRoute },
  location,
}) {
  const { content, title, id } = sanityPage;
  const { _rawOpenGraph } = sanityRoute;
  const layouts = content || [];
  const newLocation = location.pathname.split("/").join("");

  // if (location.pathname !== "/" && location.pathname !== '/events/' && process.env.NODE_ENV === 'production') {
  //   return (
  //     <Layout>
  //       <PageUnderConstruction />
  //     </Layout>
  //   );
  // }
  return (
    <Layout>
      <SEO
        bodyClass={newLocation ? newLocation : "home-page"}
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
