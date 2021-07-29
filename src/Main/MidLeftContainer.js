import React from "react";
import "./MidLeftContainer.css";
import UploadImg from "../hero-thumb.png";
import Sidetiles from "./Sidetiles";
import { sideTiles1, sideTiles2 } from "./MainConstant";

const MidLeftContainer = () => (
  <div className="midLeftSection">
    <img className="midLeftImg" src={UploadImg} alt="hero-thumb" />
    <h4 className="h4 sideTiles">My Care.com</h4>
    <hr className="hrDot"></hr>
    <Sidetiles headings={sideTiles1} />
    <hr className="hrDot"></hr>
    <Sidetiles headings={sideTiles2} />
  </div>
);

export default MidLeftContainer;
