import React, { useEffect, useRef, useState } from "react";
import "./LeftPlanSide.css";
import WholeMapLocalData from "../WholeMap/WholeMapLocalData.js";
import DateRangePick from "../DateRangePicker/DateRangePicker2";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { PlanTripTime } from "../PlanTripTime/PlanTripTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import {
  addArrInForJangso,
  deleteAllPickJanso,
  deletePickJangso,
  minSetter,
  timeSetter,
} from "../../redux/store";

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
  let reduxState = useSelector((state) => {
    return state;
  });
  const [whosModal, setWhosModal] = useState(false);
  useEffect(() => {
    //WholeMapLocalData.js에서 현재클릭해서 들어온 지역명과 같은 지역명 찾기
    let findId = WholeMapLocalData.find((data) => {
      return data.localName === (reduxState.localNameForMarker ?? currPosition);
    });
    //그리고 그 지역명으로 setting해주기
    //WholeMapLocalData에는 한정된지역만 있으므로 api로 전체 지역명을 받아서 비교하자
    setFindcurrPositionId(findId.id);
    setAppearCalendar(true);
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
          <div className="dateRangePicker">
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
        </div>
      </div>
      <div className="leftPlanSide__setting_detail_part">
        <div className="planTripTime__div">
          <PlanTripTime saveDays={saveDays} savePeriod={savePeriod} />
        </div>

        <h3 style={{ textAlign: "center", margin: "1rem 0" }}>선택목록</h3>
        <div
          className="leftPlanSide__pickLocal__type__container"
          onClick={toggleBtn}>
          <span
            className="leftPlanSide__pickLocal__type-btn sukbak"
            onClick={() => {
              setWhosModal(true);
            }}>
            숙박
          </span>
          <span
            className="leftPlanSide__pickLocal__type-btn jangso lps__type-btn-picked"
            onClick={() => {
              setWhosModal(false);
            }}>
            장소
          </span>
        </div>
        {whosModal ? <SukSoMadal saveDays={saveDays} /> : <JangSoModal />}
      </div>
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
        setAppearCalendar(!appearCalendar);
      }}>{`${sdy}.${sdm + 1}.${sdd} ~ ${edy}.${edm + 1}.${edd}`}</div>
  );
};

function JangSoModal() {
  let reduxState = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  return (
    <div className="jangSoModal__container">
      <div className="jangSoModal__counter__container">
        <span className="jangSoModal__counter">
          {reduxState.arrForPickJangso.length}
        </span>
        <span>
          (총{reduxState.leftSideTimeSetter}시간{reduxState.leftSideMinSetter}
          분)
        </span>
      </div>
      <div
        className="jangSoModal__allDel-btn"
        onClick={() => {
          dispatch(deleteAllPickJanso([]));
        }}>
        장소전체삭제
      </div>
      {reduxState.arrForPickJangso.length !== 0 ? (
        <div className="jangSoModal__pickedJangso__container">
          {reduxState.arrForPickJangso.map((local, index) => {
            return <PickedLocation local={local} />;
          })}
        </div>
      ) : (
        <div className="jangSoModal__desc">
          <span>가고 싶은 장소들을 검색하여 추가해주세요</span>
          <span> 설정하신 일자별 여행시간내에서</span>
          <span> 하루 평균 최대 8개의 장소까지 선택 가능합니다</span>
          <FontAwesomeIcon icon={faPlus} className="jangSoModal__plus-btn" />
        </div>
      )}
    </div>
  );
}

function PickedLocation({ local }) {
  let [timeVal, setTimeVal] = useState(2);
  let [minVal, setMinVal] = useState(0);
  let dispatch = useDispatch();
  let arrForPickJangso = useSelector((state) => {
    return state.arrForPickJangso;
  });
  let reff = useRef();
  useEffect(() => {
    reff.current.classList.add("slide-in-right");
    dispatch(timeSetter(2));
  }, [arrForPickJangso]);

  return (
    <div className="pickedLocation__container" ref={reff}>
      <div className="pickedLocation__img-container">
        <img
          src="/images/bg1.png"
          onError={(e) => {
            e.target.src = "/images/no-image.jpg";
          }}
        />
      </div>
      <div className="pickedLocation__info-container">
        <div className="pickedLocation__info-title">
          <h4>{local}</h4>
          <FontAwesomeIcon
            icon={faX}
            className="pickedLocation__info-title__closeBtn"
            onClick={() => {
              dispatch(deletePickJangso(local));
              dispatch(addArrInForJangso(local));
              reff.current.classList.remove("slide-in-right");
            }}
          />
        </div>
        <div className="pickedLocation__time-container">
          <FontAwesomeIcon icon={faClock} style={{ marginRight: "3px" }} />
          <input
            type="number"
            name={1}
            min={0}
            max={24}
            maxLength={5}
            defaultValue={timeVal}
            style={{ width: "40px", fontSize: "20px", color: "var(--orange)" }}
            onClick={(e) => {
              if (e.target.value !== 0) {
                if (timeVal > e.target.value) dispatch(timeSetter(-1));
                else dispatch(timeSetter(1));
                setTimeVal(e.target.value);
              }
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                if (timeVal > e.target.value)
                  dispatch(timeSetter(e.target.value - timeVal));
                else dispatch(timeSetter(e.target.value - timeVal));
                setTimeVal(e.target.value);
              }
            }}
          />
          <span style={{ fontSize: "13px" }}>시간</span>
          <input
            type="number"
            min={0}
            max={59}
            style={{ width: "40px", fontSize: "20px", color: "var(--orange)" }}
            defaultValue={minVal}
            onClick={(e) => {
              if (e.target.value !== 0) {
                if (minVal > e.target.value) dispatch(minSetter(-1));
                else dispatch(minSetter(1));
                setMinVal(e.target.value);
              }
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                if (minVal > e.target.value)
                  dispatch(minSetter(e.target.value - minVal));
                else dispatch(minSetter(e.target.value - minVal));
                setMinVal(e.target.value);
              }
            }}
          />
          <span style={{ fontSize: "13px" }}>분</span>
        </div>
      </div>
    </div>
  );
}

function SukSoMadal({ saveDays }) {
  let arr = new Array(saveDays + 1).fill(0);
  return (
    <div className="suksoModal__container">
      <div className="suksoModal__counter__container">
        <span className="suksoModal__counter">0</span>
      </div>
      <div className="suksoModal__allDel-btn">숙소전체삭제</div>
      <div className="suksoModal__desc">
        <span>숙소는 일정의 시작 지점과 종료 지점으로 설정됩니다.</span>
        <span> 마지막 날은 시작 지점으로만 설정됩니다.</span>
      </div>
      {arr.map((val, index) => {
        return <SukSoSubModal index={index} />;
      })}
    </div>
  );
}

function SukSoSubModal({ index }) {
  return (
    <div className="sukSoSubModal__container">
      <div className="sukSoSubModal__dayBtn">DAY {index}</div>
      <div className="suksoModal__desc">
        <span>일자버튼을 누르고 숙소를 추가하세요</span>
        <FontAwesomeIcon icon={faPlus} className="sukSoSubModal__plus-btn" />
      </div>
    </div>
  );
}

function toggleBtn(e) {
  if (e.target.nodeName === "SPAN") {
    if (e.target.classList.contains("sukbak")) {
      e.target.nextElementSibling.classList.remove("lps__type-btn-picked");
      e.target.classList.add("lps__type-btn-picked");
    } else {
      e.target.previousElementSibling.classList.remove("lps__type-btn-picked");
      e.target.classList.add("lps__type-btn-picked");
    }
  }
}

export default LeftPlanSide;
