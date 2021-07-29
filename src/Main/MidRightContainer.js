import React from "react";
import "./MidRightContainer.css";
import { imgH3, imgP1, imgP2, imgBtnText } from "./MainConstant";

const MidRightContainer = () => (
  <div className="midRightItem">
    <div className="imageText">
      <h3 className="midRightText">{imgH3}</h3>
      <p className="midRightText imageSubText">{imgP1}</p>
      <br />
      <p className="midRightText para">{imgP2}</p>
      <button className="btn midRrightText">{imgBtnText}</button>
    </div>
  </div>
);

export default MidRightContainer;
