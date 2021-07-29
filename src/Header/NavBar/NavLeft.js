import React, { useState, useCallback } from "react";
import { leftItems } from "../HeaderConstant";
import DropDown from "./DropDown";
import NavItem from "./NavItem";

const NavLeft = () => {
  const [ViewDd, setViewDd] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setViewDd(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setViewDd(false);
  }, []);

  return (
    <div className="navLeft ul">
      <li className="navLinks">
        <a href="#" className="menuLeft radiusLeft">
          Children
        </a>
      </li>
      <li className="navLinks senior">
        <a
          href="#"
          className="menuLeft"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Seniors
        </a>
        {ViewDd && <DropDown />}
      </li>
      <NavItem items={leftItems} classN="menuLeft ddAtag" />
    </div>
  );
};

export default NavLeft;
