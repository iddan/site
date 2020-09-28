import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import sortBy from "lodash.sortby";
import Project from "../Project";
import Layout from "../layout";
import "./Projects.css";

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = useMemo(() => {
    return sortBy(transformData(data), (project) => project.startDate);
  }, [data]);
  return (
    <Layout longHeader>
      <div className="Projects">
        <section className="Projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Projects;

function transformData(data) {
  return data.allProjects.nodes.map((node) => ({
    ...node,
    startDate: new Date(node.startDate),
  }));
}

const query = graphql`
  {
    allProjects {
      nodes {
        title
        description
        image
        imageSize
        link
        startDate
      }
    }
  }
`;
