import React from "react";
import Project from "../Project";

/**
 * Passes project entry data to the Project component
 */
export const ProjectPreviewTemplate = ({ entry }) => {
  /**
   * entry is a {@link https://immutable-js.github.io/immutable-js/docs/#/Map | ImmutableJS Map}
   */
  const data = entry.get("data").toObject();
  return <Project {...data} />;
};
