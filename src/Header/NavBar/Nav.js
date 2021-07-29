import React, { Component } from "react";
import "./Nav.css";
import NavItem from "./NavItem";
import { rightItems } from "../HeaderConstant";
import NavLeft from "./NavLeft";

const Nav = () => (
  <div className="nav">
    <NavLeft />
    <div className="navRight">
      <NavItem items={rightItems} classN="menuRight ddAtag" />
    </div>
  </div>
);

export default Nav;
