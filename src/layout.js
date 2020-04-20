import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

import "./layout.css";

export default ({ children, longHeader }) => {
  return (
    <div>
      <Helmet
        title="iddan"
        meta={[
          { name: "description", content: "Iddan Aaronsohn's personal site" },
          { name: "keywords", content: "iddan, aaronsohn" },
        ]}
      />
      <Header long={longHeader} />
      {children}
      <Footer />
    </div>
  );
};
