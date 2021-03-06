import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import styled, { createGlobalStyle } from 'styled-components';

import 'prismjs/themes/prism-okaidia.css';

import Header from './Header';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #fff;
    font-family: "Open sans", sans-serif;
    margin: 0;
    padding: 0;
  }

  ${() => {
    /* Override PrismJS Defaults */ return null;
  }}

  pre {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    font-size: 14px;
  }

  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`;

const Body = styled.section`
  margin: 0 auto;
  max-width: 960px;
`;

export default ({ site, frontmatter = {}, children }) => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata;

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter;

  const keywords = (frontmatterKeywords || siteKeywords).join(', ');
  const description = frontmatterDescription || siteDescription;

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>

      <GlobalStyle />

      <MDXProvider
        components={{
          ...MDXLayoutComponents,
          ...MDXGlobalComponents,
        }}
      >
        <Header />
        <Body>
          {children}
        </Body>
      </MDXProvider>
    </Fragment>
  );
};

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
`;
