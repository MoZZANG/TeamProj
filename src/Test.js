import React, { useState, useEffect } from "react";
import axios from "axios"; // 액시오스

const Test = () => {
  const [id, setId] = useState(0);

  function stateTest() {
    setId(id + 1);
  }
  useEffect(() => {
    alert("ok");
  }, []);

  function testAxios() {
    axios
      .get("/api/rest/info")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log("get요청실행됨");
      });
  }

  return (
    <div>
      test{id}
      <button
        style={{ background: "green", cursor: "pointer" }}
        onClick={() => stateTest()}>
        test
      </button>
      <button
        style={{ background: "yellow", cursor: "pointer" }}
        onClick={() => testAxios()}>
        axiosTest
      </button>
    </div>
  );
};

export default Test;
