import React from "react";

const GridContent = ({ heading, subheadings }) => (
  <div>
    <p className="greyTxt">{heading}</p>
    {subheadings.map((x, index) => (
      <p className="blueText" key={index}>
        {x}
      </p>
    ))}
  </div>
);

export default GridContent;
