import React from "react";
import FbLogo from "../joinus.png";
import TwitterLogo from "../twitter (1).png";
import { text1, text2, text3, text4, text5 } from "./HeaderConstant";

const UpperRight = () => (
  <div className="upperRight">
    <p className="logout">
      {text1} <span className="bar">|</span>
      <span className="bluetext">{text2}</span>
    </p>
    <p className="blueText">
      {text3}
      <span className="bar">|</span> {text4} <span className="bar">|</span>
      {text5}
    </p>
    <div className="upperRightImages">
      <img className="fbLogo" src={FbLogo} alt="fb" />
      <img className="twitterLogo" src={TwitterLogo} alt="twitter" />
    </div>
  </div>
);

export default UpperRight;
