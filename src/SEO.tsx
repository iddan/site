/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 * Should only be used within Gatsby's Head component
 *
 * @see: https://www.gatsbyjs.com/docs/use-static-query/
 *
 * @module
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export type SEOProps = {
  /** The page title */
  title: string;
  /** The page description */
  description?: string;
};

const SEO = ({ description, title }: SEOProps) => {
  const { site } = useStaticQuery<Queries.SEOQuery>(query);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <>
      <html lang="en" />
      <title>
        {title} | ${defaultTitle}
      </title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  );
};

export default SEO;

export const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
