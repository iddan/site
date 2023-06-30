import React from "react";
import { graphql } from "gatsby";
import { Textfit } from "react-textfit";
import Image from "./Image";
import "./Project.css";

const Project = ({
  project: { title, image, imageSize, description, link },
}: {
  project: Queries.ProjectFragment;
}) => (
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

export const query = graphql`
  fragment Project on Project {
    title
    image
    imageSize
    description
    link
  }
`;
