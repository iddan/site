import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../Header";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="iddan"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
