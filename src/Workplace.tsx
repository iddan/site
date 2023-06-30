import React from "react";
import "./card-list.css";
import { graphql } from "gatsby";

export type TWorkplace = Omit<
  Queries.WorkplaceFragment,
  "startDate" | "endDate"
> & {
  startDate: Date;
  endDate: Date | null;
};

export type WorkplaceProps = {
  workplace: TWorkplace;
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

export const query = graphql`
  fragment Workplace on Workplace {
    title
    startDate
    role
    link
    endDate
    description
    current
  }
`;
