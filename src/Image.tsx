import React from "react";

const Image = ({ source, size }: { source: string; size: number }) => (
  <div
    className="Image"
    style={{
      backgroundSize: size && size * 100 + "%",
      backgroundImage: `url(${source})`,
    }}
  />
);

export default Image;
