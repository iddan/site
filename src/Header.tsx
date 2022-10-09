import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";
import DarkModeToggle from "./DarkModeToggle";

import "./Header.css";

const Header = ({ long }: { long?: boolean }) => (
  <header className={classNames("Header", { long })}>
    <h1>
      <Link to="/" title="Home">
        iddan
      </Link>
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
