import React from "react";

import { Tag } from "../Tag";
import "./data-row.scss";

interface IDataRowProps {
  product: Array<{ Highlighted: string; Normal: string }>;
}

const DataRow = (props: IDataRowProps) => {
  return (
    <div className="row-container">
      <div className="row-header">
        <div className="header-cell">
          <span>Type</span> Resistors
        </div>
        <div className="header-cell">
          <span>MAN.</span> Manufacturer
        </div>
        <div className="header-cell mpn-cell">
          <span className="title">MPN</span>
          {props.product.map((part) => {
            if (part["Highlighted"]) {
              return <span className="highlight">{part["Highlighted"]}</span>;
            }
            return <span className="normal">{part["Normal"]}</span>;
          })}
        </div>
      </div>

      <div className="row-content">
        <div>
          <Tag name="Manual" />
        </div>
      </div>
    </div>
  );
};

export default DataRow;
