import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Project from "./Project";

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = transformData(data);
  return (
    <>
      <h2>Projects</h2>
      <section className="Projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </>
  );
};

export default Projects;

function transformData(data) {
  return data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter);
}

const query = graphql`
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
