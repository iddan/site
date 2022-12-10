import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../layout";
import { ordinal } from "../ordinal.util";
import SEO from "../SEO";
import "./index.css";
import { parseWorkplace } from "./work";

type Data = {
  workplaces: {
    title: string;
    startDate: string;
    role: string;
    link: string;
    endDate: string | null;
    description: string;
    current: boolean;
  };
};

const Home = () => {
  const data = useStaticQuery<Data>(getData);
  const currentWorkplace = parseWorkplace(data.workplaces);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <h3>Hello!</h3>
        <p>I'm Iddan Aaronsohn, an entrepreneur.</p>
        <p>I specialise in digital products and software engineering.</p>
        <p>Occasionally, I do graphic design and fine art.</p>
        <p>
          Based in <a href="https://en.wikipedia.org/wiki/Tel_Aviv">Tel Aviv</a>
          .
        </p>
        <p>
          I am working my way towards{" "}
          <a href="https://en.wikipedia.org/wiki/Earning_to_give">
            earn to give
          </a>
          .
        </p>
        <p>
          <a href="/work">Current role:</a> {currentWorkplace.role} at{" "}
          <a href={currentWorkplace.link}>{currentWorkplace.title}</a> (
          {calculateYearInRole(currentWorkplace.startDate)} year)
        </p>
      </div>
    </Layout>
  );
};

export default Home;

function calculateYearInRole(startDate: Date): string {
  return ordinal(calculateWorkDurationInYears(startDate) + 1);
}

/** @todo handle more cases if needed */
function calculateWorkDurationInYears(startDate: Date) {
  console.log(startDate);

  const duration = Number(new Date()) - Number(startDate);
  return Math.floor(duration / 3.154e10);
}

const getData = graphql`
  query getData {
    workplaces(current: { eq: true }) {
      title
      startDate
      role
      link
      endDate
      description
      current
    }
  }
`;
