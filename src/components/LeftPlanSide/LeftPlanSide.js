import React, { useEffect, useState } from "react";
import "./LeftPlanSide.css";
import WholeMapLocalData from "../WholeMap/WholeMapLocalData.js";
import DateRangePick from "../DateRangePicker/DateRangePicker2";
import ChangeDate from "../DateRangePicker/ChangeDate.js";
const LeftPlanSide = ({ currPosition }) => {
  const [findcurrPositionId, setFindcurrPositionId] = useState("");
  const [days, setDays] = useState(0);
  const [apply, setApply] = useState(false);
  const [period, setPeriod] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    //WholeMapLocalData.js에서 현재클릭해서 들어온 지역명과 같은 지역명 찾기
    let findId = WholeMapLocalData.find((data) => {
      return data.localName == currPosition;
    });
    //그리고 그 지역명으로 setting해주기
    setFindcurrPositionId(findId.id);
    console.log(new Date());
    console.log(period);
  }, []);
  return (
    <div className="LeftPlanSide">
      <div className="leftPlanSide__localNDay">
        <h2>{currPosition}</h2>
        <p>{findcurrPositionId}</p>
        <h2>
          {days}박 {days + 1}일
        </h2>
        {apply && <ChangeDate period={period} />}
        {/* <ChangeDate period={period} /> */}
      </div>
      <div>
        <DateRangePick
          setDays={setDays}
          setPeriod={setPeriod}
          setApply={setApply}
        />
      </div>
    </div>
  );
};

export default LeftPlanSide;
