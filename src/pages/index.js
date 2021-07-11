import React from "react";
import Layout from "../layout";
import SEO from "../SEO";
import "./index.css";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <h3>hello,</h3>
        <p>I'm Iddan Aaronsohn, an entrepreneur.</p>
        <p>I specialise in digital products and software engineering.</p>
        <p>Occasionally, I do graphic design and fine art.</p>
        <p>Currently Based in Tel Aviv - Yafo.</p>
        <p>
          I am working my way towards{" "}
          <a href="https://en.wikipedia.org/wiki/Earning_to_give">
            earn to give
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default Home;
