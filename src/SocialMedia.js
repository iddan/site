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
        alt="Facebook"
        link="https://facebook.com/theiddan"
        icon={facebook}
      />
      <SocialMedium
        alt="Twitter"
        link="https://twitter.com/iddan"
        icon={twitter}
      />
      <SocialMedium
        alt="GitHub"
        link="https://github.com/iddan"
        icon={github}
      />
      <SocialMedium
        alt="Instagram"
        link="https://instagram.com/aniddan"
        icon={instagram}
      />
    </>
  );
};

export default SocialMedia;

const SocialMedium = ({ link, icon, alt }) => (
  <a className="SocialMedium icon-button" href={link}>
    <img alt={alt} src={icon} />
  </a>
);
