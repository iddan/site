import React from "react";
import { Link } from "gatsby";

import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import "./Header.css";
import useDarkMode from "use-dark-mode";

const SocialMedia = ({ link, icon, alt }) => (
  <a className="SocialMedia" href={link}>
    <img alt={alt} src={icon} />
  </a>
);

const DarkModeToggle = () => {
  const { value, toggle } = useDarkMode();
  const emoji = value ? "🌙" : "☀️";
  return (
    <div className="DarkModeToggle" onClick={toggle}>
      {emoji}
    </div>
  );
};

const Header = () => (
  <header>
    <h1>
      <Link to="/">iddan</Link>
    </h1>
    <section className="settings">
      <DarkModeToggle />
    </section>
    <aside>
      <SocialMedia
        alt="Facebook"
        link="https://facebook.com/theiddan"
        icon={facebook}
      />
      <SocialMedia
        alt="Twitter"
        link="https://twitter.com/iddan"
        icon={twitter}
      />
      <SocialMedia alt="GitHub" link="https://github.com/iddan" icon={github} />
      <SocialMedia
        alt="Instagram"
        link="https://instagram.com/aniddan"
        icon={instagram}
      />
    </aside>
  </header>
);

export default Header;
