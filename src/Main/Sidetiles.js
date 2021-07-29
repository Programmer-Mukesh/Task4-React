import React from "react";

const Sidetiles = ({ headings }) => (
  <div>
    {headings.map((x, index) => (
      <p key={index} className="blueText sideTiles">
        {x}
      </p>
    ))}
  </div>
);

export default Sidetiles;
