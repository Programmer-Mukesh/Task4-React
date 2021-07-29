import React from "react";
import Ad from "../pic2.png";
import "./Banner.css";

const Banner = () => (
  <div className="banner">
    <span className="greeting">
      Hello,<span className="name"> Adflk</span>
    </span>
    <img className="adImg" src={Ad} alt="banner" />
  </div>
);

export default Banner;
