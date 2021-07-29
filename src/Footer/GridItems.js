import React from "react";
import SocialLogos from "./join us.png";
import FooterDesc from "./FooterDesc";
import GridContent from "./GridContent";
import {
  greyText1,
  greyText2,
  pArray1,
  pArray2,
  greyText3,
  pArray3,
  pArray4,
  pArray5,
  pArray6,
  greyText6,
} from "./Constant";

const GridItems = () => (
  <div>
    <div className="footerContainer1">
      <div className="gridItem1">
        <GridContent heading={greyText1} subheadings={pArray1} />
      </div>
      <div className="gridItem2">
        <GridContent heading={greyText2} subheadings={pArray2} />
      </div>
      <div className="gridItem3">
        <p className="greyTxt">Join us on</p>
        <img src={SocialLogos} alt="join us" />
      </div>
    </div>

    <div className="footerContainer2">
      <div className="container2Item1">
        <GridContent heading={greyText3} subheadings={pArray3} />
      </div>
      <div className="gridItem2">
        <br />
        <GridContent subheadings={pArray4} />
      </div>
      <div className="gridItem3">
        <br />
        <GridContent subheadings={pArray5} />
      </div>
    </div>

    <div className="footerContainer3">
      <div className="gridItem1">
        <GridContent heading={greyText6} subheadings={pArray6} />
      </div>
      <FooterDesc />
    </div>
  </div>
);

export default GridItems;
