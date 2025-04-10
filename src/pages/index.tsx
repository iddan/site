import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../layout";
import { ordinal } from "../ordinal.util";
import SEO from "../SEO";
import { parseWorkplace } from "./work";
import "./index.css";

const Home = ({ data }: PageProps<Queries.HomePageQuery>) => {
  const currentWorkplace = data.workplace && parseWorkplace(data.workplace);

  return (
    <Layout>
      <div className="Home">
        <p>I'm Iddan Aaronsohn, an entrepreneur based in Tel Aviv.</p>
        <p>
          I specialize in building successful digital products and growing
          businesses. Brining a unique combination of technical expertise,
          product vision, sales acumen, and marketing strategy to every project.
        </p>
        <p>Occasionally, I do graphic design and fine art.</p>
        <p>
          With a decade of experience, I've built and scaled multiple successful
          products, including serving as the first CTO of{" "}
          <a href="https://amplication.com">Amplication</a>, where I built and
          launched their initial product. I also built the initial product for{" "}
          <a href="https://flycode.com">Flycode</a> (YC S22), which has grown
          into a highly successful business. I also created and launched the
          initial product for <a href="https://magicyard.co">MagicYard</a>,
          acquired by <a href="https://www.volleygames.com/">Volley</a>. As a
          Founding Engineer at WithElement (YC W21), I helped shape the
          company's product and growth strategy. I was also one of the first
          engineers at <a href="https://khealth.com">K Health</a> helping it
          grow from 0 to millions of users and reaching a valuation of $1B.{" "}
          <a href="/work">
            <i>Work &rarr;</i>
          </a>
        </p>
        <p>
          I'm also actively involved in open source development. I maintain two
          popular libraries (
          <a href="https://github.com/iddan/react-spreadsheet">
            react-spreadsheet
          </a>{" "}
          and{" "}
          <a href="https://github.com/iddan/react-native-canvas">
            react-native-canvas
          </a>
          ) with over 1K stars on GitHub and have contributed to{" "}
          <a href="https://github.com/cayleygraph/cayley">Cayley</a>. I also
          hosted a software podcast called{" "}
          <a href="https://open.spotify.com/show/0QJdQ5Q5Q5Q5Q5Q5Q5Q5Q5">
            Merge
          </a>
          .{" "}
          <a href="/projects">
            <i>Projects &rarr;</i>
          </a>
        </p>
        <p>
          I consult entrepreneurs and engineers on technical challenges, product
          development, and business growth. I also help engineers navigate their
          careers and make strategic career moves.
        </p>
        <p>
          While Israel is going through a{" "}
          <a href="https://www.vox.com/2023/7/23/23804795/israel-protests-judicial-reforms-netanyahu-likud-idf">
            challenging period
          </a>
          , I'm dedicating my efforts to helping the country. Currently, I am
          available for freelance work. If you're interested in my services,
          please reach out at{" "}
          <a href="mailto:mail@aniddan.com">mail@aniddan.com</a>.
        </p>
        {currentWorkplace && (
          <p>
            <a href="/work">Current role:</a> {currentWorkplace.role} at{" "}
            <a href={currentWorkplace.link}>{currentWorkplace.title}</a> (
            {calculateYearInRole(currentWorkplace.startDate)} year)
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Home;

function calculateYearInRole(startDate: Date): string {
  return ordinal(calculateWorkDurationInYears(startDate) + 1);
}

/** @todo handle more cases if needed */
function calculateWorkDurationInYears(startDate: Date): number {
  const duration = Number(new Date()) - Number(startDate);
  return Math.floor(duration / 3.154e10);
}

export const query = graphql`
  query HomePage {
    workplace(current: { eq: true }) {
      ...Workplace
    }
  }
`;

export const Head = () => <SEO title="Home" />;
