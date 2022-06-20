import { faBed, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Search from "../Search/Search";
import SearchedLocation from "../SearchedLocation/SearchedLocation";
import "./RightRecommandSide.css";
const RightRecommandSide = () => {
  //searchedLocaion 테스트용 배열
  let arr = ["경복궁", "창덕궁", "남산타워"];

  return (
    <div className="RightRecommandSide">
      <div>
        <Search />
      </div>
      <div className="rightRecommandSide__span__container">
        <span
          className="rightRecommandSide__span"
          onClick={(e) => {
            e.stopPropagation();
            e.target.classList.toggle("rRS_span-active");
            e.target.nextElementSibling.classList.toggle("rRS_span-active");
          }}>
          <FontAwesomeIcon
            icon={faBed}
            className="rightRecommandSide__span-i"
          />
          호텔
        </span>
        <span
          className="rightRecommandSide__span rRS_span-active"
          onClick={(e) => {
            e.stopPropagation();
            e.target.classList.toggle("rRS_span-active");
            e.target.previousElementSibling.classList.toggle("rRS_span-active");
          }}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="rightRecommandSide__span-i"
          />
          장소
        </span>
      </div>

      <div className="rightRecommandSide__searchedLocation__container">
        <h3>{`검색결과(?건)`}</h3>
        {arr.map((local, index) => {
          return <SearchedLocation key={index} local={local} />;
        })}
        {/* <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation />
        <SearchedLocation /> */}
      </div>
    </div>
  );
};

export default RightRecommandSide;
