import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import sortBy from "lodash.sortby";
import Layout from "../layout";
import Workplace from "../Workplace";
import SEO from "../SEO";
import "../card-list.css";

type Data = {
  allWorkplaces: {
    nodes: Array<{
      title: string;
      startDate: string;
      role: string;
      link: string;
      endDate: string;
      description: string;
      current: string;
    }>;
  };
};

const Work = () => {
  const data = useStaticQuery<Data>(query);
  const workplaces = useMemo(() => {
    return sortBy(
      transformData(data),
      (workplace) => workplace.startDate
    ).reverse();
  }, [data]);

  return (
    <Layout longHeader>
      <SEO title="Work" />
      <section className="CardList">
        {workplaces.map((workplace, index) => (
          <Workplace workplace={workplace} key={index} />
        ))}
      </section>
    </Layout>
  );
};

export default Work;

function transformData(data: Data) {
  return data.allWorkplaces.nodes.map((node) => ({
    ...node,
    startDate: new Date(node.startDate),
    endDate: node.endDate ? new Date(node.endDate) : null,
  }));
}

const query = graphql`
  {
    allWorkplaces {
      nodes {
        title
        startDate
        role
        link
        endDate
        description
        current
      }
    }
  }
`;
