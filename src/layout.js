import React from "react";
import Helmet from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";

import "./index.css";

export default ({ children }) => (
  <div>
    <Helmet
      title="iddan"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    {children}
    <Footer />
  </div>
);
