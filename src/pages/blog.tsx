import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../SEO";
import "../card-list.css";
import "./blog.css";

type Data = {
  allMarkdownRemark: {
    nodes: Array<{
      fields: {
        slug: string;
      };
      excerpt: string;
      frontmatter: {
        title: string;
        date: Date;
        description: string;
      };
    }>;
  };
};

const Blog = () => {
  const data = useStaticQuery<Data>(query);
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
              <small>
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </small>
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
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`;
