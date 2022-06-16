import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Outlet } from "react-router-dom";
const Navbar = ({ scrollNav }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);
  let navigate = useNavigate();
  return (
    <>
      <nav className={scrollNav ? "navbar scrollActive" : "navbar"}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <h1>AAMU</h1>
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMoblieMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMoblieMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/others"
                className="nav-links"
                onClick={closeMoblieMenu}>
                others
              </Link>
            </li>
          </ul>
          <div className="navbar-btn-container">
            <button
              className="navbar-btn"
              onClick={() => {
                navigate("/login");
              }}>
              로그인
            </button>
            <button className="navbar-btn">회원가입</button>
          </div>
          <div className="navbar-menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
