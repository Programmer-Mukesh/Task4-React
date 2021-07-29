import React, { Component } from "react";
import "./MidCenterContainer.css";
import MiddleImg from "../5998-Summer_Phase2_BrandModule_Seeker.jpg";
import BlueBox from "./BlueBox";
import { h3, p1, p2, p3 } from "./MainConstant";

const MidCenterContainer = () => (
  <div className="midMidSection">
    <BlueBox />
    <img className="middleImg" src={MiddleImg} alt="image" />
    <div className="midLowerSection">
      <div className="midText">
        <h3 className="h3">{h3}</h3>
        <p className="lightText">{p1}</p>
        <p className="greyTxt paragraph">{p2}</p>
        <p>{p3}</p>
      </div>
    </div>
  </div>
);

export default MidCenterContainer;
