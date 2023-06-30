import React, { useMemo } from "react";
import { PageProps, graphql } from "gatsby";
import sortBy from "lodash.sortby";
import Project from "../Project";
import Layout from "../layout";
import SEO from "../SEO";
import "./Projects.css";

const Projects = ({ data }: PageProps<Queries.ProjectsPageQuery>) => {
  const projects = useMemo(() => {
    return sortBy(transformData(data), (project) => project.startDate);
  }, [data]);
  return (
    <Layout longHeader>
      <section className="Projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
    </Layout>
  );
};

export default Projects;

function transformData(data: Queries.ProjectsPageQuery) {
  return data.allProject.nodes.map((node) => ({
    ...node,
    startDate: new Date(node.startDate),
  }));
}

export const query = graphql`
  query ProjectsPage {
    allProject {
      nodes {
        ...Project
        startDate
      }
    }
  }
`;

export const Head = () => <SEO title="Projects" />;
