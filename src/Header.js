import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";
import DarkModeToggle from "./DarkModeToggle";

import "./Header.css";

const Header = ({ long }) => (
  <header className={classNames({ long })}>
    <h1>
      <Link to="/">iddan</Link>
    </h1>
    <section className="settings">
      <DarkModeToggle />
    </section>
    <aside>
      <SocialMedia />
    </aside>
    <Navigation />
  </header>
);

export default Header;
