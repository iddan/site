import React from "react";
import "./card-list.css";

type WorkplaceProps = {
  workplace: {
    role: string;
    link: string;
    title: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
  };
};

const Workplace = ({ workplace }: WorkplaceProps) => (
  <div className="Card">
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
