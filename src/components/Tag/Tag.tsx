import React from "react";

import "./tag.scss";

type TagProps = {
  name: string;
};

const Tag = ({ name }: TagProps) => {
  return <span className="tag">{name}</span>;
};

export default Tag;
