import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "./SEO";
import "./BlogPost.css";

/** @todo infer from graphql */
type Data = {
  markdownRemark: {
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
    };
  };
};

const BlogPost = ({ data }: { data: Data }) => {
  const post = data.markdownRemark;
  const { title } = post.frontmatter;

  return (
    <Layout longHeader>
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="BlogPost"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
