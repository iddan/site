import React from "react";
import Project, { ProjectProps } from "../Project";

/**
 * Passes project entry data to the Project component
 */
export const ProjectPreviewTemplate = ({ entry }: { entry: unknown }) => {
  /**
   * entry is a {@link https://immutable-js.github.io/immutable-js/docs/#/Map | ImmutableJS Map}
   */
  // @ts-expect-error
  const data: ProjectProps = entry.get("data").toObject();
  return <Project {...data} />;
};
