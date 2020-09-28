import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import sortBy from "lodash.sortby";
import Layout from "../layout";
import Workplace from "../Workplace";
import "./work.css";

const Work = () => {
  const data = useStaticQuery(query);
  const workplaces = useMemo(() => {
    return sortBy(
      transformData(data),
      (workplace) => workplace.startDate
    ).reverse();
  }, [data]);

  return (
    <Layout longHeader>
      <div className="Workplaces">
        {workplaces.map((workplace, index) => {
          return <Workplace workplace={workplace} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default Work;

function transformData(data) {
  return data.allWorkplaces.nodes.map((node) => ({
    ...node,
    startDate: new Date(node.startDate),
    endDate: node.endDate && new Date(node.endDate),
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
