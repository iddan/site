import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../SEO";
import "../card-list.css";

const Blog = () => {
  const data = useStaticQuery(query);
  return (
    <Layout longHeader>
      <SEO title="Blog" />
      <section className="CardList">
        {data.allMarkdownRemark.nodes.map((post) => (
          <article
            key={post.fields.slug}
            className="Card"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{post.frontmatter.title}</span>
                </Link>
              </h2>
              <small>{post.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;

const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
