import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    © Iddan Aaronsohn {new Date().getFullYear()}.{" "}
    <a href="https://github.com/iddan/site">Source code</a>
  </footer>
);

export default Footer;
