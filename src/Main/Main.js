import React from "react";
import Banner from "./Banner";
import MidCenterContainer from "./MidCenterContainer";
import MidLeftContainer from "./MidLeftContainer";
import MidRightContainer from "./MidRightContainer";
import "./Main.css";
import SearchBar from "./SearchBar";

const Main = () => (
  <div className="main">
    <hr className="divider"></hr>
    <SearchBar />
    <Banner />
    <div className="middleContainer">
      <MidLeftContainer />
      <MidCenterContainer />
      <MidRightContainer />
    </div>
  </div>
);

export default Main;
