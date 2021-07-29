import React from "react";

const DropDownItems = ({ ddItems, addClass }) => (
  <div>
    {ddItems.map((x, index) => (
      <li className="ddlist">
        <a href="#" className={addClass} key={index}>
          {x}
        </a>
      </li>
    ))}
  </div>
);

export default DropDownItems;
