/**
 * SEO component
 * Should only be used within Gatsby's Head component
 *
 * @module
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export type SEOProps = {
  /** The page title */
  title: string;
  /** The page description */
  description?: string | null;
};

const SEO = ({ description, title }: SEOProps) => {
  const { site } = useStaticQuery<Queries.SEOQuery>(query);

  if (!site?.siteMetadata) throw new Error("No site metadata found");
  if (!site.siteMetadata.title) throw new Error("No site title found");
  if (!site.siteMetadata.description)
    throw new Error("No site description found");

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <>
      <html lang="en" />
      <title>
        {title} | {defaultTitle}
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
  query SEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
