import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./layout.css";

const Layout = ({
  children,
  longHeader = false,
}: {
  children: React.ReactNode;
  longHeader?: boolean;
}) => {
  return (
    <>
      <Header long={longHeader} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
