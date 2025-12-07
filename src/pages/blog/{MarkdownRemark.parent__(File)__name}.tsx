import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../layout";
import SEO from "../../SEO";
import "./BlogPost.css";

const BlogPost = ({ data }: PageProps<Queries.BlogPostPageQuery>) => {
  const post = data.markdownRemark;

  if (!post) throw new Error("No post found");
  if (!post.frontmatter) throw new Error("No frontmatter found");
  if (!post.html) throw new Error("No html found");

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

export const query = graphql`
  query BlogPostPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
