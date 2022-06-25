import { configureStore, createSlice } from "@reduxjs/toolkit";

let localNameForMarker = createSlice({
  name: "localNameForMarker",
  initialState: null,
  reducers: {
    changeLnfM(state, action) {
      return action.payload;
    },
  },
});
export let { changeLnfM } = localNameForMarker.actions;

let kindOfInfo = createSlice({
  name: "kindOfInfo",
  initialState: "장소",
  reducers: {
    changeInfo(state, action) {
      return action.payload;
    },
  },
});

export let { changeInfo } = kindOfInfo.actions;
//우측 추천장소 배열
let arrForJangso = createSlice({
  name: "arrForJangso",
  initialState: [
    "경복궁",
    "창덕궁",
    "남산타워",
    "한옥마을",
    "광화문",
    "교보문고",
    "청와대",
    "화장실",
    "코스모",
    "서브웨이",
  ],
  reducers: {
    changeArrForJangso(state, action) {
      return action.payload;
    },
    //left에서 장소지웠을때 다시 right에 추가하기
    addArrInForJangso(state, action) {
      state = state.unshift(action.payload);
    },
    deleteArrInJangso(state, action) {
      return (state = state.filter((local) => local !== action.payload));
    },
  },
});
export let { changeArrForJangso, addArrInForJangso, deleteArrInJangso } =
  arrForJangso.actions;

//추천장소에서 선택한 장소를 넣는 배열
let arrForPickJangso = createSlice({
  name: "arrForPickJangso",
  initialState: [],
  reducers: {
    addPickJangso(state, action) {
      state = state.push(action.payload);
    },
    deletePickJangso(state, action) {
      return (state = state.filter((local) => local !== action.payload));
    },
    deleteAllPickJanso(state, action) {
      return action.payload;
    },
  },
});
export let { addPickJangso, deleteAllPickJanso, deletePickJangso } =
  arrForPickJangso.actions;

//추천숙소
let arrForSukso = createSlice({
  name: "arrForSukso",
  initialState: ["하얏트", "그랜드조선", "트럼프", "뜨밤호텔", "낮져밤이호텔"],
  reducers: {
    changeArrForSukso(state, action) {
      return action.payload;
    },
  },
});
export let { changeArrForSukso } = arrForJangso.actions;

//추천숙소에서 선택한 숙소저장하는 배열
let arrForPickSukso = createSlice({
  name: "arrForPickSukso",
  initialState: [],
  reducers: {
    addPickSukso(state, action) {
      state = state.push(action.payload);
    },
  },
});
export let { addPickSukso } = arrForPickSukso.actions;

//왼쪽 time state관리
let leftSideTimeSetter = createSlice({
  name: "leftSideTimeSetter",
  initialState: 0,
  reducers: {
    timeSetter(state, action) {
      return state + action.payload;
    },
    setInitForTime(state, action) {
      return action.payload;
    },
  },
});
export let { timeSetter, setInitForTime } = leftSideTimeSetter.actions;

//왼쪽 minutes state관리
let leftSideMinSetter = createSlice({
  name: "leftSideMinSetter",
  initialState: 0,
  reducers: {
    minSetter(state, action) {
      return state + action.payload;
    },
    setInitForMin(state, action) {
      return action.payload;
    },
  },
});
export let { minSetter, setInitForMin } = leftSideMinSetter.actions;

//추천장소or추천숙소 선택시 버튼선택용
// let rightToggle = createSlice({
//   name: "rightToggle",
//   initialState: null,
//   reducer: {
//     changeRightToggle(state, action) {
//       return (
//         state.classList.remove("rps__type-btn-picked"),
//         action.payload.classList.add("rps__type-btn-picked")
//       );
//     },
//   },
// });
// export let { changeRightToggle } = rightToggle.actions;

let saveDaysRedux = createSlice({
  name: "saveDaysRedux",
  initialState: [],
  reducers: {
    changeSaveDaysRedux(state, action) {
      return new Array(action.payload).fill(0);
    },
    changeAllSaveDaysRedux(state, action) {
      return action.payload;
    },
  },
});
export let { changeSaveDaysRedux, changeAllSaveDaysRedux } =
  saveDaysRedux.actions;

export default configureStore({
  reducer: {
    localNameForMarker: localNameForMarker.reducer,
    kindOfInfo: kindOfInfo.reducer,
    arrForJangso: arrForJangso.reducer,
    arrForSukso: arrForSukso.reducer,
    arrForPickJangso: arrForPickJangso.reducer,
    arrForPickSukso: arrForPickSukso.reducer,
    leftSideTimeSetter: leftSideTimeSetter.reducer,
    leftSideMinSetter: leftSideMinSetter.reducer,
    // rightToggle: rightToggle.reducer,
    saveDaysRedux: saveDaysRedux.reducer,
  },
});
