import React from "react";
import DropDownItems from "./DropDownItems";
import { ddItems1, ddItems2, ddItems3 } from "../HeaderConstant";
import WomenImg from "./women.png";

const DropDown = () => (
  <div>
    <ul className="dropDown">
      <div className="ddInner">
        <li className="ddlist">
          <a href="#" className="ddAtag ddBold">
            Senior Care
          </a>
        </li>
        <div className="ddflex ddlist">
          <li>
            <a href="#" className="ddAtag ddBold">
              Start Here
            </a>
          </li>
          <img className="womenImg" src={WomenImg} alt="oldSenior" />
        </div>
        <hr className="ddHr" />
        <DropDownItems ddItems={ddItems1} addClass="ddAtag" />
        <hr className="ddHr" />
        <DropDownItems ddItems={ddItems2} addClass="ddAtag" />
        <hr className="ddHr" />
        <DropDownItems ddItems={ddItems3} addClass="ddAtag" />
      </div>
    </ul>
  </div>
);

export default DropDown;
