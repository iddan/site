import React from "react";
import { Link } from "gatsby";
import "./Navigation.css";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Item to="/">Intro</Item>
      </li>
      <li>
        <Item to="/projects">Projects</Item>
      </li>
      <li>
        <Item to="/work">Work</Item>
      </li>
    </ul>
  </nav>
);

export default Navigation;

const Item = ({ to, children }) => (
  <Link activeClassName="active" to={to}>
    {children}
  </Link>
);
