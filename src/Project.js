import React from "react";
import { Textfit } from "react-textfit";
import Image from "./Image";
import "./Project.css";

const Project = ({ title, image, imageSize, description, link }) => (
  <a href={link} className="Project">
    <Image source={image} size={imageSize} />
    <h3>
      <Textfit mode="single" forceSingleModeWidth={false}>
        {title}
      </Textfit>
    </h3>
    <p>{description}</p>
  </a>
);

export default Project;
