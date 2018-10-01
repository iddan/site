import React from "react";
import { Link } from "gatsby";

import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import "./Header.css";

const SocialMedia = ({ link, icon }) => (
  <a className="SocialMedia" href={link}>
    <img src={icon} />
  </a>
);

const Header = () => (
  <header>
    <h1>
      <Link to="/">iddan</Link>
    </h1>
    <aside>
      <SocialMedia link="https://facebook.com/theiddan" icon={facebook} />
      <SocialMedia link="https://twitter.com/iddan" icon={twitter} />
      <SocialMedia link="https://github.com/iddan" icon={github} />
      <SocialMedia link="https://instagram.com/aniddan" icon={instagram} />
    </aside>
  </header>
);

export default Header;
