import React from "react";
import UpperRight from "./UpperRight";
import "./TopLayout.css";
import Logo from "../care-logo.gif";

const TopLayout = () => (
  <div className="topLayout">
    <img className="logo" src={Logo} alt="logo" />
    <UpperRight />
  </div>
);

export default TopLayout;
