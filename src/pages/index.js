import React from "react";
import { Link } from "gatsby";
import Layout from "../layout";
import "./index.css";

export default () => {
  return (
    <Layout>
      <div className="Home">
        <h2>I am Iddan Aarosohn</h2>
        <p>
          Software Engineer / Graphic Designer / Visual Artist based in Tel
          Aviv.
        </p>
        <Link to="projects">
          <h3>Projects</h3>
        </Link>
        <Link to="work">
          <h3>Work</h3>
        </Link>
      </div>
    </Layout>
  );
};
