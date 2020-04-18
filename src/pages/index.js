import React from "react";

import Layout from "../layout";
import Projects from "../Projects";
import "./index.css";

export default ({ data }) => {
  return (
    <Layout>
      <main className="Home">
        <Projects />
      </main>
    </Layout>
  );
};
