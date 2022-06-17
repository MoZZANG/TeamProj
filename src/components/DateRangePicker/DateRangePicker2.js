import React, { useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ko from "date-fns/locale/ko";
import "./DateRangePicker.css";
const DateRangePick = ({ setDays, setPeriod, setApply }) => {
  let reff = useRef();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <div className="dateRangePicker__container">
        <div>
          <DateRange
            id="calID"
            // ref={reff}
            editableDateInputs={true}
            onChange={(item) => {
              setState([item.selection]);
              setDays(
                (Date.parse(item.selection.endDate) -
                  Date.parse(item.selection.startDate)) /
                  1000 /
                  60 /
                  60 /
                  24
              );
              setPeriod(item.selection);
            }}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={2}
            direction="vertical"
            locale={ko}
            minDate={addDays(new Date(), 0)}
            showDateDisplay={true}
          />
        </div>
        <div
          className="dateRangePicker__acceptBtn"
          onClick={() => {
            setApply(true);
          }}>
          적용하기
        </div>
      </div>
    </>
  );
};

export default DateRangePick;