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
    deleteArrInJangso(state, action) {
      return (state = state.filter((local) => local !== action.payload));
    },
  },
});

export let { changeArrForJangso, deleteArrInJangso } = arrForJangso.actions;

let arrForPickJangso = createSlice({
  name: "arrForPickJangso",
  initialState: [],
  reducers: {
    addJangso(state, action) {
      state = state.push(action.payload);
    },
  },
});

export let { addJangso } = arrForPickJangso.actions;

let arrForSukso = createSlice({
  name: "arrForJangso",
  initialState: ["하얏트", "그랜드조선", "트럼프", "뜨밤호텔", "낮져밤이호텔"],
  reducers: {
    changeArrForSukso(state, action) {
      return action.payload;
    },
  },
});

export let { changeArrForSukso } = arrForJangso.actions;

export default configureStore({
  reducer: {
    localNameForMarker: localNameForMarker.reducer,
    kindOfInfo: kindOfInfo.reducer,
    arrForJangso: arrForJangso.reducer,
    arrForSukso: arrForSukso.reducer,
    arrForPickJangso: arrForPickJangso.reducer,
  },
});
