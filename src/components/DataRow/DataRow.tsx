import React from "react"

import { Tag } from "../Tag";
import "./data-row.scss";

const DataRow = () => {
    return (
        <div className="row-container">
            <div className="row-header">
                <div className="header-cell">
                    <span>Type</span> Resistors
                </div>
                <div className="header-cell">
                    <span>Type</span> Resistors
                </div>
                <div className="header-cell">
                    <span>Type</span> Resistors
                </div>
            </div>

            <div className="row-content">
                <div>
                    <Tag name="Manual" />
                </div>
            </div>
        </div>
    )
}

export default DataRow;