import React from "react";
import Layout from "../layout";
import "./index.css";

export default () => {
  return (
    <Layout>
      <div className="Home">
        <h3>hello,</h3>
        <p>
          I'm Iddan Aaronsohn a Software Engineer / Graphic Designer / Visual
          Artist
        </p>
        <p>
          Co-Founder, VP R&D at{" "}
          <a href="https://amplication.com">Amplication</a>
        </p>
        <p>Based in Tel Aviv - Yafo.</p>
      </div>
    </Layout>
  );
};
