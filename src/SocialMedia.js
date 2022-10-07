import React from "react";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <>
      <SocialMedium
        title="Facebook"
        link="https://facebook.com/theiddan"
        icon={facebook}
      />
      <SocialMedium
        title="Twitter"
        link="https://twitter.com/iddan"
        icon={twitter}
      />
      <SocialMedium
        title="GitHub"
        link="https://github.com/iddan"
        icon={github}
      />
      <SocialMedium
        title="Instagram"
        link="https://instagram.com/aniddan"
        icon={instagram}
      />
    </>
  );
};

export default SocialMedia;

const SocialMedium = ({ link, icon, title }) => (
  <a className="SocialMedium icon-button" href={link} title={title}>
    <img alt={`${title}-icon`} src={icon} />
  </a>
);
