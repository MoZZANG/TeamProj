import React, { useEffect, useState } from "react";
import "./LeftPlanSide.css";
import WholeMapLocalData from "../WholeMap/WholeMapLocalData.js";
import DateRangePick from "../DateRangePicker/DateRangePicker2";
const LeftPlanSide = ({ currPosition }) => {
  const [findcurrPositionId, setFindcurrPositionId] = useState("");
  const [saveDays, setSaveDays] = useState(0);
  const [days, setDays] = useState(0);
  const [savePeriod, setSavePeriod] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [appearCalendar, setAppearCalendar] = useState(false);
  const [period, setPeriod] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    //WholeMapLocalData.js에서 현재클릭해서 들어온 지역명과 같은 지역명 찾기
    let findId = WholeMapLocalData.find((data) => {
      return data.localName == currPosition;
    });
    //그리고 그 지역명으로 setting해주기
    //WholeMapLocalData에는 한정된지역만 있으므로 api로 전체 지역명을 받아서 비교하자
    setFindcurrPositionId(findId.id);
  }, []);
  return (
    <div className="LeftPlanSide">
      <div className="leftPlanSide__localNDay">
        <h2>{currPosition}</h2>
        <p>{findcurrPositionId}</p>
        <div className="leftPlanSide__localNDay__how-many-day">
          {days}박 {days + 1}일
        </div>
        <div className="changeDate__container">
          <ChangeDate
            period={period}
            appearCalendar={appearCalendar}
            setAppearCalendar={setAppearCalendar}
          />
        </div>
      </div>
      <div className="dataRangePicker__container">
        {appearCalendar ? (
          <DateRangePick
            setDays={setDays}
            setPeriod={setPeriod}
            savePeriod={savePeriod}
            setSavePeriod={setSavePeriod}
            saveDays={saveDays}
            setSaveDays={setSaveDays}
            appearCalendar={appearCalendar}
            setAppearCalendar={setAppearCalendar}
          />
        ) : null}
      </div>
      <div>leftSide</div>
    </div>
  );
};

const ChangeDate = ({ period, appearCalendar, setAppearCalendar }) => {
  let sdy = period.startDate.getFullYear();
  let sdm = period.startDate.getMonth();
  let sdd = period.startDate.getDate();

  let edy = period.endDate.getFullYear();
  let edm = period.endDate.getMonth();
  let edd = period.endDate.getDate();
  return (
    <div
      className="changeDate__container"
      onClick={() => {
        console.log("asdf");
        setAppearCalendar(!appearCalendar);
      }}>{`${sdy}.${sdm + 1}.${sdd} ~ ${edy}.${edm + 1}.${edd}`}</div>
  );
};
export default LeftPlanSide;
