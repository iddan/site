import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import sortBy from "lodash.sortby";
import Project from "../Project";
import Layout from "../layout";
import SEO from "../SEO";
import "./Projects.css";

type Data = {
  allProjects: {
    nodes: Array<{
      title: string;
      description: string;
      image: string;
      imageSize: number;
      link: string;
      startDate: string;
    }>;
  };
};

const Projects = () => {
  const data = useStaticQuery<Data>(query);
  const projects = useMemo(() => {
    return sortBy(transformData(data), (project) => project.startDate);
  }, [data]);
  return (
    <Layout longHeader>
      <SEO title="Projects" />
      <section className="Projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </Layout>
  );
};

export default Projects;

function transformData(data: Data) {
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
