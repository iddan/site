import React, { useMemo } from "react";
import { PageProps, graphql } from "gatsby";
import sortBy from "lodash.sortby";
import Layout from "../layout";
import Workplace, { TWorkplace } from "../Workplace";
import SEO from "../SEO";
import "../card-list.css";

const Work = ({ data }: PageProps<Queries.WorkPageQuery>) => {
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

function transformData(data: Queries.WorkPageQuery) {
  return data.allWorkplace.nodes.map(parseWorkplace);
}

export function parseWorkplace(node: Queries.WorkplaceFragment): TWorkplace {
  return {
    ...node,
    startDate: new Date(node.startDate),
    endDate: node.endDate ? new Date(node.endDate) : null,
  };
}

export const query = graphql`
  query WorkPage {
    allWorkplace {
      nodes {
        ...Workplace
      }
    }
  }
`;

export const Head = () => <SEO title="Work" />;
