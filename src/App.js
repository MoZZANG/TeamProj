import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.js";
import { useEffect, useState } from "react";
import WholeMap from "./components/WholeMap/WholeMap";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/Login/Login";

function App() {
  let location = useLocation();
  useEffect(() => {
    changeLocation(location, setWhereUrl);
  }, [location]);
  const [scrollNav, setScrollNav] = useState(false);
  const [whereUrl, setWhereUrl] = useState(false);

  const HandleScroll = () => {
    if (window.scrollY > 990 && window.scrollY < 1780) setScrollNav(true);
    else setScrollNav(false);
  };
  window.addEventListener("scroll", HandleScroll);

  return (
    <div>
      <Routes>
        <Route element={<Navbar scrollNav={scrollNav} whereUrl={whereUrl} />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/WholeMap" element={<WholeMap />}></Route>
          <Route path="/mainPage/:currPosition" element={<MainPage />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

function changeLocation(location, setWhereUrl) {
  if (location.pathname.indexOf("mainPage") === 1) setWhereUrl(true);
}
export default App;
