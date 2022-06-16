import React from "react";
import "./MainPage.css";
import KMap from "../KMap/KMap.js";
import { useParams } from "react-router-dom";
const MainPage = () => {
  let { currPosition } = useParams();
  return (
    <div>
      <KMap currPosition={currPosition} />
    </div>
  );
};

export default MainPage;
