import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../layout";
import SEO from "../SEO";
import "../card-list.css";
import "./blog.css";

const Blog = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  return (
    <Layout longHeader>
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

export const query = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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

export const Head = () => <SEO title="Blog" />;
