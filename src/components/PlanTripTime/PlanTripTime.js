import React from "react";
import "./PlanTripTime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faClock } from "@fortawesome/free-solid-svg-icons";
const PlanTripTime = ({ saveDays, savePeriod }) => {
  console.log(savePeriod.startDate.getMonth() + 1);
  console.log(savePeriod.startDate.getDate());
  console.log(savePeriod.endDate.getMonth() + 1);
  console.log(savePeriod.endDate.getDate());
  return (
    <>
      <div className="planTripTime__container">
        <div className="planTripTime__title">
          <FontAwesomeIcon icon={faClock} />
          <p>여행시간 상세설정(총 {(saveDays + 1) * 12}시간)</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="planTripTime__modal">
          <PlanTripTimeModal savePeriod={savePeriod} />
        </div>
      </div>
    </>
  );
};

function PlanTripTimeModal({ savePeriod }) {
  return <div>{savePeriod.startDate.getMonth()}</div>;
}
export default PlanTripTime;
