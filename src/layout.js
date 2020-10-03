import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./layout.css";

export default ({ children, longHeader }) => {
  return (
    <>
      <Header long={longHeader} />
      {children}
      <Footer />
    </>
  );
};
