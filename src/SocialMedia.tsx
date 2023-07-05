import React from "react";
import twitter from "../icons/twitter.svg";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import hackerNews from "../icons/hacker-news.svg";
import spotify from "../icons/spotify.svg";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <>
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
        title="Hacker News"
        link="https://news.ycombinator.com/user?id=iddan"
        icon={hackerNews}
      />
      <SocialMedium
        title="Instagram"
        link="https://instagram.com/aniddan"
        icon={instagram}
      />
      <SocialMedium
        title="Spotify"
        link="https://open.spotify.com/user/aniddan"
        icon={spotify}
      />
    </>
  );
};

export default SocialMedia;

const SocialMedium = ({
  link,
  icon,
  title,
}: {
  link: string;
  icon: string;
  title: string;
}) => (
  <a className="SocialMedium icon-button" href={link} title={title}>
    <img alt={`${title}-icon`} src={icon} />
  </a>
);
