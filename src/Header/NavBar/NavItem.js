import React from "react";

const NavItem = ({ items, classN }) => (
  <ul className="ul">
    {items.map((x, index) => (
      <li className="navLinks">
        <a href="#" className={classN} key={index}>
          {x}
        </a>
      </li>
    ))}
  </ul>
);

export default NavItem;
