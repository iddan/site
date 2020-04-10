import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import Project from "../Project";
import "./index.css";

function* transformData(data) {
  for (const edge of data.allMarkdownRemark.edges) {
    yield edge.node.frontmatter;
  }
}

export default ({ data }) => {
  return (
    <Layout>
      <main className="Home">
        <h2>Projects</h2>
        <section className="Projects">
          {Array.from(transformData(data), (project, index) => (
            <Project key={index} {...project} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            image
            imageSize
            link
            startDate
          }
        }
      }
    }
  }
`;
