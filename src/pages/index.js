import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Excerpt from '../components/Excerpt';

export default function Index({ data: { site, allMdx } }) {
  const posts = allMdx.edges.map(({ node: post }) => post);

  return (
    <Layout site={site}>
      {posts && posts.slice(1, 7).map((post, i) => (
        <Excerpt
          id={post.id}
          key={i}
          post={post}
        />
      ))}
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
