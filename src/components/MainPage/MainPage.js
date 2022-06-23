import React, { useState } from "react";
import "./MainPage.css";
import KMap from "../KMap/KMap.js";
import { useParams } from "react-router-dom";
import LeftPlanSide from "../LeftPlanSide/LeftPlanSide";
import RightRecommandSide from "../RightRecommandSide/RightRecommandSide";
import Navbar from "../Navbar/Navbar";
const MainPage = () => {
  const [titleName, setTitleName] = useState("");
  let { currPosition } = useParams();
  return (
    <div className="MainPage">
      <LeftPlanSide currPosition={currPosition} />
      <KMap currPosition={currPosition} setTitleName={setTitleName} />
      <RightRecommandSide setTitleName={setTitleName} titleName={titleName} />
    </div>
  );
};

export default MainPage;
