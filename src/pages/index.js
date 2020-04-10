import React from "react";
import { graphql } from "gatsby";
import classNames from "classnames";
import useDarkMode from "use-dark-mode";

import Layout from "../layout";
import Project from "../Project";
import "./index.css";

function* transformData(data) {
  for (const edge of data.allMarkdownRemark.edges) {
    yield edge.node.frontmatter;
  }
}

export default ({ data }) => {
  const darkMode = useDarkMode();
  return (
    <div className={classNames({ "dark-mode": darkMode.value })}>
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
    </div>
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
