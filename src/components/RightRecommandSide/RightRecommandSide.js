import React from "react";
import Search from "../Search/Search";
import "./RightRecommandSide.css";
const RightRecommandSide = () => {
  return (
    <div className="RightRecommandSide">
      <Search />
      <SearchedLocation />
    </div>
  );
};

export default RightRecommandSide;
