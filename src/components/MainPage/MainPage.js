import React from "react";
import "./MainPage.css";
import KMap from "../KMap/KMap.js";
import { useParams } from "react-router-dom";
import LeftPlanSide from "../LeftPlanSide/LeftPlanSide";
import RightRecommandSide from "../RightRecommandSide/RightRecommandSide";
const MainPage = () => {
  let { currPosition } = useParams();
  return (
    <div className="MainPage">
      <LeftPlanSide currPosition={currPosition} />
      <KMap currPosition={currPosition} />
      <RightRecommandSide />
    </div>
  );
};

export default MainPage;
