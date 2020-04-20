import React from "react";

const Workplace = ({ workplace }) => (
  <div className="Workplace">
    <h3>
      {workplace.role} at <a href={workplace.link}>{workplace.title}</a>
    </h3>
    <p>
      {workplace.startDate.toLocaleDateString()} -{" "}
      {workplace.endDate && workplace.endDate.toLocaleDateString()}
    </p>
    <p>{workplace.description}</p>
  </div>
);

export default Workplace;
