import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import PortableText from "../../components/PortableText";
import SEO from "../../components/SEO";

export default function ServiceTemplate({ params, data }) {
  const { sanityService } = data;
  console.log(sanityService.description);
  return (
    <Layout>
      <SEO title={sanityService?.title} description={sanityService?.excerpt} />
      {params.title}
      <pre>{JSON.stringify(sanityService, null, 2)}</pre>
      {sanityService?.description?.columns?.map(({ _key, _rawContent }) => {
        return <PortableText key={_key} blocks={_rawContent || []} />;
      })}
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
        ...GridContentFragment
      }
    }
  }
`;
