import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Grid from '../components/Grid';

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout site={site}>
      <Grid posts={allMdx.edges.map(({ node: post }) => post)} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            categories
            keywords
          }
        }
      }
    }
  }
`;
