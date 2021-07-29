import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { h2text, P1text,  P2text , btnText} from "./MainConstant";

const BlueBox = () => (
  <div className="blueBox">
    <div className="space">
      <div className="careMidLogo">Care.com</div>
      <div>
        <h2 className="blueBoxH2">
          {h2text}
          <span className="cross">
            <AiOutlineCloseCircle />
          </span>
        </h2>
        <p>
          {P1text}
        </p>
        <br />
        <button className="searchBtn">{btnText}</button>
      </div>
    </div>
    <p className="instruction">
     {P2text}
      <span className="questionLogo">
        <AiFillQuestionCircle />
      </span>
      Skip
    </p>
  </div>
);

export default BlueBox;
