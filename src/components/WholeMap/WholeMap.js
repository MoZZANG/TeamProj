import React, { useState } from "react";
import "./WholeMap.css";
import WholeMapCoords from "./WholeMapCoords.js";
// import WholeMapLocalName from "./WholeMapLocalName.js";
import WholeMapLocalData from "./WholeMapLocalData.js";
import {
  Container,
  Contents,
  Overlay,
  Title,
  Close,
  Body,
} from "../Modal/Modal.js";
import PopularLocation from "../PopularLocation/PopularLocation";
import { Link } from "react-router-dom";
const WholeMap = () => {
  const [modalState, setModalState] = useState(false);
  const [localName, setLocalName] = useState("");
  const [localId, setLocalId] = useState("");
  return (
    <div className="WholeMap">
      <div className="test__container">
        <div className="wholeMap__img__container">
          <img
            className="wholeMap__img"
            src={process.env.PUBLIC_URL + "/images/koreaMap.png"}
            alt="지도이미지"
            useMap="#koreaMap"
          />
          {WholeMapLocalData.map((data, i) => {
            return (
              <WholeMapLocalName
                data={data}
                modalState={modalState}
                setModalState={setModalState}
                setLocalName={setLocalName}
                setLocalId={setLocalId}
                key={i}
              />
            );
          })}
        </div>

        <map name="koreaMap">
          <WholeMapCoords />
        </map>
      </div>

      <div className="wholeMap__modal">
        {modalState ? (
          <Modal
            setModalState={setModalState}
            localName={localName}
            localId={localId}
          />
        ) : null}
      </div>
    </div>
  );
};

//모달창
function Modal({ setModalState, localName, localId }) {
  return (
    <Container>
      <Overlay
        onClick={() => {
          setModalState(false);
        }}
      />
      <Contents>
        <Title>
          <span className="local__modal__span">{localName}</span>의 추천 여행지
          <Close onClick={() => setModalState(false)}>X</Close>
        </Title>
        <Body>
          <div className="local__modal__img">
            <Link to={`/mainPage/` + localName}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/localImages/" +
                  localId +
                  ".png"
                }
              />
            </Link>
          </div>
          <ul className="local__modal__ul">
            <PopularLocation />
            <PopularLocation />
            <PopularLocation />
            <PopularLocation />
          </ul>
        </Body>
      </Contents>
    </Container>
  );
}

function WholeMapLocalName({
  modalState,
  setModalState,
  setLocalName,
  setLocalId,
  data,
}) {
  return (
    <span
      className={"local " + data.id}
      id={data.id}
      onClick={() => {
        setLocalName(data.localName);
        setModalState(!modalState);
        setLocalId(data.id);
      }}>
      {data.localName}
    </span>
  );
}
export default WholeMap;
