import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import sortBy from "lodash.sortby";
import Layout from "../layout";
import Workplace from "../Workplace";
import SEO from "../SEO";
import "../card-list.css";

type WorkplaceNode = {
  title: string;
  startDate: string;
  role: string;
  link: string;
  endDate: string | null;
  description: string;
  current: boolean;
};

type Data = {
  allWorkplaces: {
    nodes: WorkplaceNode[];
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
  return data.allWorkplaces.nodes.map(parseWorkplace);
}

export function parseWorkplace(node: WorkplaceNode) {
  return {
    ...node,
    startDate: new Date(node.startDate),
    endDate: node.endDate ? new Date(node.endDate) : null,
  };
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

export const Head = () => <SEO title="Work" />;
