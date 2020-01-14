import React from 'react';
import Img from 'gatsby-image';

import Link from './Link';

// @TODO add styles with styled-components
export default ({ post }) => (
  <article>
    <small>{post.frontmatter.date}</small>
    <h3>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.title}
      </Link>
    </h3>
    {post.frontmatter.banner && (
      <Img
        sizes={post.frontmatter.banner.childImageSharp.sizes}
      />
    )}
    <p>{post.excerpt}</p>
  </article>
);
